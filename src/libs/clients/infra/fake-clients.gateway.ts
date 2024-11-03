import type {
  ClientsGateway,
  GatewayResponse,
  PagingAndFilteringOptions,
} from '../models/clients.gateway';
import type { Client } from '../models/client.model';
import { of, type Observable } from 'rxjs';

export class FakeClientsGateway implements ClientsGateway {
  createClient(client: Client): Observable<Client> {
    this.clients.push(client);
    return of(Object.assign(<Client>{}, client));
  }

  loadClients(
    options: PagingAndFilteringOptions
  ): Observable<GatewayResponse<Client>> {
    const { offset, pageSize, filter } = options;
    let clientList = this.clients;
    let startIndex = Math.max(0, offset * pageSize);
    let endIndex = Math.min(clientList.length, startIndex + pageSize);

    if (filter) {
      clientList = clientList.filter((c) => c.clientId.includes(filter));
    }
    return of({
      totalCount: clientList.length,
      data: clientList.slice(startIndex, endIndex),
    });
  }
  clients: Client[] = [];
}

export const clientsGateway = new FakeClientsGateway();
