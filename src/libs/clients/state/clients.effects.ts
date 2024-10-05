import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  ClientsActionTypes,
  ClientsLoaded,
  ClientsLoadFailure,
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
