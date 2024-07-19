import { createAction, props } from '@ngrx/store';
import type { Client } from '../models/client.model';

export enum ClientsActionTypes {
  // ClientsAction = '[Clients] Action',
  // Clientselected = '[Clients] Selected',
  LoadClients = '[Clients] Load Data',
  ClientsLoaded = '[Clients] Data Loaded',
  ClientsLoadFailure = '[Clients] Data Load failure',
  // AddProject = '[Clients] Add Data',
  // ProjectAdded = '[Clients] Data Added',
  // UpdateProject = '[Clients] Update Data',
  // ProjectUpdated = '[Clients] Data Updated',
  // DeleteProject = '[Clients] Delete Data',
  // ProjectDeleted = '[Clients] Data Deleted',
}
// export class Clientselected implements Action {
//   readonly type = ClientsActionTypes.Clientselected;
//   constructor(public payload) {}
// }

export const LoadClients = createAction(ClientsActionTypes.LoadClients);
// export class LoadClients implements Action {
//   readonly type = ClientsActionTypes.LoadClients;
//   constructor() {}
// }

export const ClientsLoaded = createAction(
  ClientsActionTypes.ClientsLoaded,
  props<{ payload: Client[] }>()
);

export const ClientsLoadFailure = createAction(
  ClientsActionTypes.ClientsLoadFailure
);

// export class AddProject implements Action {
//   readonly type = ClientsActionTypes.AddProject;
//   constructor(public payload: Project) {}
// }

// export class ProjectAdded implements Action {
//   readonly type = ClientsActionTypes.ProjectAdded;
//   constructor(public payload: Project) {}
// }

// export class UpdateProject implements Action {
//   readonly type = ClientsActionTypes.UpdateProject;
//   constructor(public payload: Project) {}
// }

// export class ProjectUpdated implements Action {
//   readonly type = ClientsActionTypes.ProjectUpdated;
//   constructor(public payload: Project) {}
// }

// export class DeleteProject implements Action {
//   readonly type = ClientsActionTypes.DeleteProject;
//   constructor(public payload: Project) {}
// }

// export class ProjectDeleted implements Action {
//   readonly type = ClientsActionTypes.ProjectDeleted;
//   constructor(public payload: Project) {}
// }

// export type ClientsActions =
//   // | Clients
//   // | Clientselected
//   LoadClients | ClientsLoaded;
// | AddProject
// | ProjectAdded
// | UpdateProject
// | ProjectUpdated
// | DeleteProject
// | ProjectDeleted;
