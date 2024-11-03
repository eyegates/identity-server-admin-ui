import {
  combineReducers,
  createAction,
  createReducer,
  on,
  props,
} from '@ngrx/store';
import { reducers, type AppState } from './root-reducer';
import type { ClientTypes } from '../clients';
import { clientsAdapter } from '../clients/models/client.model';
type Client = ClientTypes.Client;

const rootReducer = combineReducers(reducers);
const initialState = rootReducer(undefined, createAction(''));

const withClients = createAction('withClients', props<{ payload: Client[] }>());

const reducer = createReducer(
  initialState,
  on(withClients, (state, action) => {
    return {
      ...state,
      clients: clientsAdapter.addMany(action.payload, state.clients),
    };
  })
);

export const stateBuilder = (baseState = initialState) => {
  const reduce =
    <P>(actionCreator: ReturnType<typeof createAction>) =>
    (payload: P) => {
      return stateBuilder(reducer(baseState, actionCreator({ payload })));
    };

  return {
    withClients: reduce(withClients),
    build(): AppState {
      return baseState;
    },
  };
};

export const stateBuilderProvider = () => {
  let builder = stateBuilder();
  return {
    getState() {
      return builder.build();
    },
    setState(updateFn: (_builder: StateBuilder) => StateBuilder) {
      builder = updateFn(builder);
    },
  };
};

export type StateBuilder = ReturnType<typeof stateBuilder>;
export type StateBuilderProvider = ReturnType<typeof stateBuilderProvider>;
