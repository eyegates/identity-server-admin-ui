import { provideStore } from '@ngrx/store';
import { clientEffects } from '../clients';
import { provideEffects } from '@ngrx/effects';
import type { Provider } from '@angular/core';
import type { AppState } from '..';
import { reducers } from './root-reducer';

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
