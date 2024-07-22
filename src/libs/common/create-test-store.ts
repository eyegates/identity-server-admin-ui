import { provideStore } from '@ngrx/store';
import { clientEffects, reducers, type AppState } from '../clients';
import { provideEffects } from '@ngrx/effects';

export const createTestStore = (initialState?: Partial<AppState>) => {
  return {
    providers: [
      provideStore(reducers, { initialState }),
      provideEffects(clientEffects),
    ],
  };
};
