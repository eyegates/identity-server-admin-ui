import {
  type ActionReducerMap,
  createFeatureSelector,
  createSelector,
  provideStore,
} from '@ngrx/store';

import * as fromClients from './state/clients.reducers';
import { loadClientsEffect } from './usecases/load-clients.usecase';
import { type ClientsGateway } from './models/clients.gateway';
import { provideEffects } from '@ngrx/effects';
import { InjectionToken } from '@angular/core';

export interface AppState {
  clients: fromClients.ClientsState;
}

export const reducers: ActionReducerMap<AppState> = {
  clients: fromClients.clientsReducer,
};

export type Dependencies = [
  {
    provide: InjectionToken<ClientsGateway>;
    useValue: ClientsGateway;
  }
];

export const clientEffects = { loadClients: loadClientsEffect };

export const createStore = (
  dependencies: Dependencies,
  initialState?: Partial<AppState>
) => {
  return {
    providers: [
      provideStore(reducers, { initialState }),
      provideEffects(clientEffects),
      ...dependencies,
    ],
  };
};

// -------------------------------------------------------------------
// PROJECTS SELECTORS
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
// export const selectCurrentProjectId = createSelector(
//   selectProjectsState,
//   fromProjects.getSelectedProjectId
// );

const emptyClient: { clientId: string } = {
  clientId: '',
};

// export const selectCurrentClient = createSelector(
//   selectClientEntities,
//   selectCurrentClientId,
//   (projectEntities, projectId) => {
//     return projectId ? projectEntities[projectId] : emptyProject;
//   }
// );
