import { Store } from '@ngrx/store';
import { type ClientsState } from './clients.reducers';
import { LoadClients } from './client.actions';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ClientsFacade {
  constructor(private store: Store<ClientsState>) {}

  loadClients() {
    this.store.dispatch(LoadClients());
  }
}
