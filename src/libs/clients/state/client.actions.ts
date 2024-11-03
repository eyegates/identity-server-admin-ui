import { createAction, props } from '@ngrx/store';
import type { Client } from '../models/client.model';
import type {
  GatewayResponse,
  PagingAndFilteringOptions,
} from '../models/clients.gateway';

export enum ClientsActionTypes {
  LoadClients = '[Clients] Load Data',
  ClientsLoaded = '[Clients] Data Loaded',
  ClientsLoadFailure = '[Clients] Data Load failure',
  SelectClient = '[Client] Details',
  CreateClient = '[Client] Create',
  ClientCreated = '[Client] Created',
  CreateClientFailure = '[Client] Create Client Failure',
}

export const LoadClients = createAction(
  ClientsActionTypes.LoadClients,
  props<{ payload: PagingAndFilteringOptions }>()
);

export const ClientsLoaded = createAction(
  ClientsActionTypes.ClientsLoaded,
  props<{ payload: GatewayResponse<Client> }>()
);

export const ClientsLoadFailure = createAction(
  ClientsActionTypes.ClientsLoadFailure
);

export const SelectClient = createAction(
  ClientsActionTypes.SelectClient,
  props<{ payload: string }>()
);

export const CreateClient = createAction(
  ClientsActionTypes.CreateClient,
  props<{ payload: Client }>()
);

export const ClientCreated = createAction(
  ClientsActionTypes.ClientCreated,
  props<{ payload: Client }>()
);

export const CreateClientFailure = createAction(
  ClientsActionTypes.CreateClientFailure
);
