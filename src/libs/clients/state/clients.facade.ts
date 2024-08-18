import { Store } from '@ngrx/store';
import { type ClientsState } from './clients.state';
import { LoadClients, SelectClient } from './client.actions';
import { Injectable } from '@angular/core';
import type { Observable } from 'rxjs';
import type { Client } from '../models/client.model';
import { selectAllClients, selectCurrentClient, selectTotalClients } from '..';

@Injectable({ providedIn: 'root' })
export class ClientsFacade {
  constructor(private store: Store<ClientsState>) {}

  get allClients(): Observable<Client[]> {
    return this.store.select(selectAllClients);
  }

  get currentClient(): Observable<Client> {
    return this.store.select(selectCurrentClient);
  }

  get totalClient(): Observable<number> {
    return this.store.select(selectTotalClients);
  }

  selectClient(clientId: string) {
    this.store.dispatch(SelectClient({ payload: clientId }));
  }

  loadClients() {
    this.store.dispatch(LoadClients());
  }
}
