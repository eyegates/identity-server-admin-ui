import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  ClientCreated,
  ClientsActionTypes,
  ClientsLoaded,
  ClientsLoadFailure,
  CreateClientFailure,
} from '../state/client.actions';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { CLIENTSGATEWAY } from '../models/tokens';

export const loadClientsEffect = createEffect(
  (actions$ = inject(Actions), clientsGateway = inject(CLIENTSGATEWAY)) => {
    return actions$.pipe(
      ofType(ClientsActionTypes.LoadClients),
      exhaustMap((action) =>
        clientsGateway.loadClients(action.payload).pipe(
          map((clients) => ClientsLoaded({ payload: clients })),
          catchError((error: { message: string }) => of(ClientsLoadFailure()))
        )
      )
    );
  },
  { functional: true }
);

export const createClientEffect = createEffect(
  (actions$ = inject(Actions), clientsGateway = inject(CLIENTSGATEWAY)) => {
    return actions$.pipe(
      ofType(ClientsActionTypes.CreateClient),
      exhaustMap((action) =>
        clientsGateway.createClient(action.payload).pipe(
          map((client) => ClientCreated({ payload: client })),
          catchError((error: { message: string }) => of(CreateClientFailure()))
        )
      )
    );
  },
  { functional: true }
);
