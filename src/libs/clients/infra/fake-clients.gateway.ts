import { of, type Observable } from 'rxjs';
import type { ClientsGateway } from '../models/clients.gateway';

export class FakeClientsGateway implements ClientsGateway {
  loadClients(): Observable<{ id: string; clientId: string }[]> {
    return of(this.clients);
  }

  clients: { id: string; clientId: string }[] = [];
}

export const clientsGateway = new FakeClientsGateway();
