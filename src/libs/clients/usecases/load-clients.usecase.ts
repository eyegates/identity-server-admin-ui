import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  ClientsActionTypes,
  ClientsLoaded,
  ClientsLoadFailure,
} from '../state/client.actions';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { createAction } from '@ngrx/store';
import { CLIENTSGATEWAY } from '../models/clients.gateway';

export const loadClients = createAction(ClientsActionTypes.LoadClients);

export const loadClientsEffect = createEffect(
  (actions$ = inject(Actions), clientsGateway = inject(CLIENTSGATEWAY)) => {
    return actions$.pipe(
      ofType(ClientsActionTypes.LoadClients),
      exhaustMap(() =>
        clientsGateway.loadClients().pipe(
          map((clients) => ClientsLoaded({ payload: clients })),
          catchError((error: { message: string }) => of(ClientsLoadFailure()))
        )
      )
    );
  },
  { functional: true }
);
