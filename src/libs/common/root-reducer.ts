import { clientReducers } from '@/libs/clients';
import type { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  clients: clientReducers.ClientsState;
}

export const reducers: ActionReducerMap<AppState> = {
  clients: clientReducers.clientsReducer,
};
