import {
  type ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import * as fromClients from './state/clients.reducers';

export interface AppState {
  clients: fromClients.ClientsState;
}

export const reducers: ActionReducerMap<AppState> = {
  clients: fromClients.clientsReducer,
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
