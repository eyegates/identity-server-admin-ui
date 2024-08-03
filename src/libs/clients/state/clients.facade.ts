import { Store } from '@ngrx/store';
import { type ClientsState } from './clients.reducers';
import { LoadClients, SelectClient } from './client.actions';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ClientsFacade {
  constructor(private store: Store<ClientsState>) {}

  selectClient(clientId: string) {
    this.store.dispatch(SelectClient({ payload: clientId }));
  }

  loadClients() {
    this.store.dispatch(LoadClients());
  }
}
