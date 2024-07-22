import { createAction, props } from '@ngrx/store';
import type { Client } from '../models/client.model';

export enum ClientsActionTypes {
  LoadClients = '[Clients] Load Data',
  ClientsLoaded = '[Clients] Data Loaded',
  ClientsLoadFailure = '[Clients] Data Load failure',
}

export const LoadClients = createAction(ClientsActionTypes.LoadClients);

export const ClientsLoaded = createAction(
  ClientsActionTypes.ClientsLoaded,
  props<{ payload: Client[] }>()
);

export const ClientsLoadFailure = createAction(
  ClientsActionTypes.ClientsLoadFailure
);
