import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { clientEffects, reducers, type AppState } from './clients';
import { CLIENTSGATEWAY } from './clients/models/tokens';
import { HttpClientsGateway } from './clients/infra/http-clients.gateway';

export { type Client, ClientsFacade, selectAllClients } from './clients';
export { type AppState } from './clients';

export const createStore = (initialState?: Partial<AppState>) => {
  return {
    providers: [
      provideStore(reducers, { initialState }),
      provideEffects(clientEffects),
      {
        provide: CLIENTSGATEWAY,
        useClass: HttpClientsGateway,
      },
    ],
  };
};
