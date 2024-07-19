import { InjectionToken } from '@angular/core';
import type { Observable } from 'rxjs';

export interface ClientsGateway {
  loadClients(): Observable<{ id: string; clientId: string }[]>;
}

export const CLIENTSGATEWAY = new InjectionToken<ClientsGateway>(
  'ClientsGateway'
);
