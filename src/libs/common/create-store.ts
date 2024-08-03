import { provideStore } from '@ngrx/store';
import { clientEffects, reducers, type AppState } from '../clients';
import { provideEffects } from '@ngrx/effects';
import type { Provider } from '@angular/core';

export type Dependencies = {
  providers: Provider[];
};

export const createStore = (
  config: {
    dependencies?: Dependencies;
    initialState?: Partial<AppState>;
  } = {}
) => {
  return config.dependencies
    ? [
        provideStore(reducers, { initialState: config.initialState }),
        provideEffects(clientEffects),
        config.dependencies.providers,
      ]
    : [
        provideStore(reducers, { initialState: config.initialState }),
        provideEffects(clientEffects),
      ];
};
