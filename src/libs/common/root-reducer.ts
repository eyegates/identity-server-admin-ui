import type { ActionReducerMap } from '@ngrx/store';
import {
  clientsFeature,
  type ClientsState,
} from '@/libs/clients/state/clients.state';

export interface AppState {
  clients: ClientsState;
}

export const reducers: ActionReducerMap<AppState> = {
  [clientsFeature.name]: clientsFeature.reducer,
};
