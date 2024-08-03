import { createAction, props } from '@ngrx/store';
import type { Client } from '../models/client.model';

export enum ClientsActionTypes {
  LoadClients = '[Clients] Load Data',
  ClientsLoaded = '[Clients] Data Loaded',
  ClientsLoadFailure = '[Clients] Data Load failure',
  SelectClient = '[Client] Details',
}

export const LoadClients = createAction(ClientsActionTypes.LoadClients);

export const ClientsLoaded = createAction(
  ClientsActionTypes.ClientsLoaded,
  props<{ payload: Client[] }>()
);

export const ClientsLoadFailure = createAction(
  ClientsActionTypes.ClientsLoadFailure
);

export const SelectClient = createAction(
  ClientsActionTypes.SelectClient,
  props<{ payload: string }>()
);
