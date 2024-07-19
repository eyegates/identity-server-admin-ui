import { of, type Observable } from 'rxjs';
import type { ClientsGateway } from '../models/clients.gateway';
import type { Client } from '../models/client.model';

export class FakeClientsGateway implements ClientsGateway {
  loadClients(): Observable<Client[]> {
    return of(this.clients);
  }
  clients: Client[] = [];
}

export const clientsGateway = new FakeClientsGateway();
