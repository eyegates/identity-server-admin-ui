import type { ClientsGateway } from '../models/clients.gateway';
import type { Client } from '../models/client.model';
import { Injectable } from '@angular/core';
import { of, type Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HttpClientsGateway implements ClientsGateway {
  loadClients(): Observable<Client[]> {
    return of(this.clients);
  }
  clients: Client[] = [
    {
      clientId: 'app-front',
      id: 1,
      protocolType: 'oidc',
      allowedGrantTypes: [{ id: 1, grantType: 'client-credentials' }],
    },
    {
      clientId: 'app-back',
      id: 2,
      protocolType: 'oidc',
      allowedGrantTypes: [
        { id: 1, grantType: 'client-credentials' },
        { id: 2, grantType: 'implicit' },
      ],
    },
    {
      clientId: 'app-back1',
      id: 3,
      protocolType: 'oidc',
      allowedGrantTypes: [{ id: 1, grantType: 'password' }],
    },
    {
      clientId: 'app-back2',
      id: 4,
      protocolType: 'oidc',
      allowedGrantTypes: [{ id: 1, grantType: 'client-credentials' }],
    },
    {
      clientId: 'app-back3',
      id: 5,
      protocolType: 'oidc',
      allowedGrantTypes: [{ id: 1, grantType: 'client-credentials' }],
    },
    {
      clientId: 'app-back4',
      id: 6,
      protocolType: 'oidc',
      allowedGrantTypes: [{ id: 1, grantType: 'client-credentials' }],
    },
    {
      clientId: 'app-back5',
      id: 7,
      protocolType: 'oidc',
      allowedGrantTypes: [{ id: 1, grantType: 'client-credentials' }],
    },
    {
      clientId: 'app-back6',
      id: 8,
      protocolType: 'oidc',
      allowedGrantTypes: [{ id: 1, grantType: 'client-credentials' }],
    },
    {
      clientId: 'app-back7',
      id: 9,
      protocolType: 'oidc',
      allowedGrantTypes: [{ id: 1, grantType: 'client-credentials' }],
    },
    {
      clientId: 'app-back8',
      id: 10,
      protocolType: 'oidc',
      allowedGrantTypes: [{ id: 1, grantType: 'client-credentials' }],
    },
    {
      clientId: 'app-back9',
      id: 11,
      protocolType: 'oidc',
      allowedGrantTypes: [{ id: 1, grantType: 'client-credentials' }],
    },
    {
      clientId: 'app-back10',
      id: 12,
      protocolType: 'oidc',
      allowedGrantTypes: [{ id: 1, grantType: 'client-credentials' }],
    },
  ];
}
