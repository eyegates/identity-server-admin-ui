import { type EntityState } from '@ngrx/entity';

import * as ClientActions from './client.actions';
import { createFeature, createReducer, createSelector, on } from '@ngrx/store';
import { clientsAdapter, type Client } from '../models/client.model';

export interface ClientsState extends EntityState<Client> {
  selectedClientId: string | null;
}

export const initialState: ClientsState = clientsAdapter.getInitialState({
  selectedClientId: null,
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
    on(ClientActions.ClientsLoaded, (state, action) =>
      clientsAdapter.addMany(action.payload, state)
    ),
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
      (clientEntities, clientId) =>
        clientId
          ? Object.values(clientEntities).find(
              (client) => client?.clientId === clientId
            ) ?? emptyClient
          : emptyClient
    ),
  }),
});
