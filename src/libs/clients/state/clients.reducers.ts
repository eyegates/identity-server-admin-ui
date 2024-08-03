import { type EntityState } from '@ngrx/entity';

import * as ClientActions from './client.actions';
import { createReducer, on } from '@ngrx/store';
import { clientsAdapter, type Client } from '../models/client.model';

export interface ClientsState extends EntityState<Client> {
  selectedClientId: string;
}

export const initialState: ClientsState = clientsAdapter.getInitialState({
  selectedClientId: 'null',
});

export const clientsReducer = createReducer(
  initialState,
  on(ClientActions.ClientsLoaded, (state, action) =>
    clientsAdapter.addMany(action.payload, state)
  ),
  on(ClientActions.SelectClient, (state: ClientsState, { payload }) => ({
    ...state,
    selectedClientId: payload,
  }))
);

export const getSelectedClientId = (state: ClientsState) =>
  state.selectedClientId;

// get the selectors
const { selectIds, selectEntities, selectAll, selectTotal } =
  clientsAdapter.getSelectors();

// select the array of Client ids
export const selectClientIds = selectIds;

// select the dictionary of Client entities
export const selectClientEntities = selectEntities;

// select the array of Clients
export const selectAllClients = selectAll;

// select the total Client count
export const selectClientTotal = selectTotal;
