import { provideStore } from '@ngrx/store';
import { clientEffects, reducers, type AppState } from '../clients';
import { provideEffects } from '@ngrx/effects';
import type { Provider } from '@angular/core';

export type Dependencies = {
  providers: Provider[];
};

export const createStore = (
  dependencies?: Dependencies,
  initialState?: Partial<AppState>
) => {
  return dependencies
    ? [
        provideStore(reducers, { initialState }),
        provideEffects(clientEffects),
        dependencies.providers,
      ]
    : [provideStore(reducers, { initialState }), provideEffects(clientEffects)];
};
