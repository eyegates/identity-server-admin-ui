import {
  createEntityAdapter,
  type EntityAdapter,
  type EntityState,
} from '@ngrx/entity';

import * as ClientActions from './client.actions';
import { createReducer, on } from '@ngrx/store';

export interface ClientsState
  extends EntityState<{ id: string; clientId: string }> {
  selectedClientId: string | null;
}

export const adapter: EntityAdapter<{ id: string; clientId: string }> =
  createEntityAdapter<{
    id: string;
    clientId: string;
  }>();
export const initialState: ClientsState = adapter.getInitialState({
  selectedClientId: null,
});

export const clientsReducer = createReducer(
  initialState,
  on(ClientActions.ClientsLoaded, (state, action) =>
    adapter.addMany(action.payload, state)
  )
);

export const getSelectedClientId = (state: ClientsState) =>
  state.selectedClientId;

// get the selectors
const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();

// select the array of Client ids
export const selectClientIds = selectIds;

// select the dictionary of Client entities
export const selectClientEntities = selectEntities;

// select the array of Clients
export const selectAllClients = selectAll;

// select the total Client count
export const selectClientTotal = selectTotal;
