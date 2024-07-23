import {
  type ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import * as fromClients from './state/clients.reducers';
import { loadClientsEffect } from './state/clients.effects';

export type { Client } from './models/client.model';
export { ClientsFacade } from './state/clients.facade';
export interface AppState {
  clients: fromClients.ClientsState;
}

export const reducers: ActionReducerMap<AppState> = {
  clients: fromClients.clientsReducer,
};

export const clientEffects = { loadClients: loadClientsEffect };

// -------------------------------------------------------------------
// CLIENTS SELECTORS
// -------------------------------------------------------------------
export const selectClientsState =
  createFeatureSelector<fromClients.ClientsState>('clients');

export const selectProjectIds = createSelector(
  selectClientsState,
  fromClients.selectClientIds
);
export const selectClientEntities = createSelector(
  selectClientsState,
  fromClients.selectClientEntities
);
export const selectAllClients = createSelector(
  selectClientsState,
  fromClients.selectAllClients
);