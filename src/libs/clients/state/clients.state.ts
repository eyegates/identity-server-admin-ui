import { type EntityState } from '@ngrx/entity';

import * as ClientActions from './client.actions';
import { createFeature, createReducer, createSelector, on } from '@ngrx/store';
import { clientsAdapter, type Client } from '../models/client.model';

export interface ClientsState extends EntityState<Client> {
  selectedClientId: string | null;
  totalCount: number;
}

export const initialState: ClientsState = clientsAdapter.getInitialState({
  selectedClientId: null,
  totalCount: 0,
});

const emptyClient: Client = {
  id: 0,
  clientId: '',
  protocolType: 'oidc',
  allowedGrantTypes: [],
};

export const clientsFeature = createFeature({
  name: 'clients',
  reducer: createReducer(
    initialState,
    on(ClientActions.ClientsLoaded, (state, action) => {
      return clientsAdapter.setAll(action.payload.data, {
        ...state,
        totalCount: action.payload.totalCount,
      });
    }),
    on(ClientActions.ClientCreated, (state, action) => {
      return clientsAdapter.upsertOne(action.payload, {
        ...state,
        totalCount: state.totalCount + 1,
      });
    }),
    on(ClientActions.SelectClient, (state: ClientsState, { payload }) => ({
      ...state,
      selectedClientId: payload,
    }))
  ),
  extraSelectors: ({
    selectClientsState,
    selectEntities,
    selectSelectedClientId,
  }) => ({
    ...clientsAdapter.getSelectors(selectClientsState),
    selectCurrentClient: createSelector(
      selectEntities,
      selectSelectedClientId,
      (clientEntities, clientId) => {
        return clientEntities[clientId ?? 'none'] ?? emptyClient;
      }
    ),
    selectTotalClient: createSelector(
      selectClientsState,
      (state: ClientsState) => state.totalCount
    ),
  }),
});
