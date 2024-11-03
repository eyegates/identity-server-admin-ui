import { select, Store } from '@ngrx/store';
import { type ClientsState } from './clients.state';
import { CreateClient, LoadClients, SelectClient } from './client.actions';
import { Injectable } from '@angular/core';
import type { Observable } from 'rxjs';
import type { Client } from '../models/client.model';
import { selectAllClients, selectCurrentClient, selectTotalClients } from '..';

@Injectable({ providedIn: 'root' })
export class ClientsFacade {
  constructor(private store: Store<ClientsState>) {}

  get allClients(): Observable<Client[]> {
    return this.store.pipe(select(selectAllClients));
  }

  get currentClient(): Observable<Client> {
    return this.store.pipe(select(selectCurrentClient));
  }

  get totalClient(): Observable<number> {
    return this.store.pipe(select(selectTotalClients));
  }

  selectClient(clientId: string) {
    this.store.dispatch(SelectClient({ payload: clientId }));
  }

  loadClients({
    offset,
    pageSize,
    filter,
  }: {
    offset: number;
    pageSize: number;
    filter?: string;
  }) {
    this.store.dispatch(LoadClients({ payload: { offset, pageSize, filter } }));
  }

  createClient(client: Client) {
    this.store.dispatch(CreateClient({ payload: client }));
  }
}
