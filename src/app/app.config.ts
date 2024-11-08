import {
  type ApplicationConfig,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { CLIENTSGATEWAY, createStore, HttpClientsGateway } from '@/libs';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimations(),
    createStore({
      dependencies: {
        providers: [
          {
            provide: CLIENTSGATEWAY,
            useClass: HttpClientsGateway,
          },
        ],
      },
    }),
    provideStoreDevtools({ maxAge: 25 }),
  ],
};
