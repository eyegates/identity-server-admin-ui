import { InjectionToken } from '@angular/core';
import type { Observable } from 'rxjs';
import type { Client } from './client.model';

export interface ClientsGateway {
  loadClients(): Observable<Client[]>;
}

export const CLIENTSGATEWAY = new InjectionToken<ClientsGateway>(
  'ClientsGateway'
);
