import type {
  ClientsGateway,
  GatewayResponse,
  PagingAndFilteringOptions,
} from '../models/clients.gateway';
import type { Client } from '../models/client.model';
import { Injectable } from '@angular/core';
import { of, type Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HttpClientsGateway implements ClientsGateway {
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
  clients: Client[] = [
    {
      clientId: 'app-front',
      id: 1,
      protocolType: 'oidc',
      allowedScopes: [
        { id: 1, scope: 'api1' },
        { id: 2, scope: 'api2' },
      ],
      allowedGrantTypes: [{ id: 1, grantType: 'client_credentials' }],
      redirectUris: [{ id: 1, redirectUri: 'http://redirectUri' }],
      clientSecrets: [{ id: 1, type: 'SharedSecret', value: 'sharedsecret' }],
      claims: [{ id: 1, type: 'custom-claim', value: 'custom claim value' }],
      postLogoutRedirectUris: [
        { id: 1, postLogoutRedirectUri: 'http://postLogoutRedirectUri' },
      ],
      identityProviderRestrictions: [{ id: 1, provider: 'facebook' }],
      properties: [{ id: 1, key: 'source', value: 'internal' }],
      requireClientSecret: true,
      allowAccessTokensViaBrowser: true,
    },
    {
      clientId: 'app-back',
      id: 2,
      protocolType: 'oidc',
      allowedScopes: [
        { id: 1, scope: 'api1' },
        { id: 2, scope: 'api2' },
      ],
      allowedGrantTypes: [
        { id: 1, grantType: 'client_credentials' },
        { id: 2, grantType: 'implicit' },
      ],
    },
    {
      clientId: 'app-back1',
      id: 3,
      protocolType: 'oidc',
      allowedScopes: [
        { id: 1, scope: 'api1' },
        { id: 2, scope: 'api2' },
      ],
      allowedGrantTypes: [{ id: 1, grantType: 'password' }],
    },
    {
      clientId: 'app-back2',
      id: 4,
      protocolType: 'oidc',
      allowedScopes: [
        { id: 1, scope: 'api1' },
        { id: 2, scope: 'api2' },
      ],
      allowedGrantTypes: [{ id: 1, grantType: 'client_credentials' }],
      alwaysIncludeUserClaimsInIdToken: true,
    },
    {
      clientId: 'app-back3',
      id: 5,
      protocolType: 'oidc',
      allowedScopes: [
        { id: 1, scope: 'api1' },
        { id: 2, scope: 'api2' },
      ],
      allowedGrantTypes: [{ id: 1, grantType: 'client_credentials' }],
    },
    {
      clientId: 'app-back4',
      id: 6,
      protocolType: 'oidc',
      allowedScopes: [
        { id: 1, scope: 'api1' },
        { id: 2, scope: 'api2' },
      ],
      allowedGrantTypes: [{ id: 1, grantType: 'client_credentials' }],
    },
    {
      clientId: 'app-back5',
      id: 7,
      protocolType: 'oidc',
      allowedScopes: [
        { id: 1, scope: 'api1' },
        { id: 2, scope: 'api2' },
      ],
      allowedGrantTypes: [{ id: 1, grantType: 'client_credentials' }],
    },
    {
      clientId: 'app-back6',
      id: 8,
      protocolType: 'oidc',
      allowedScopes: [
        { id: 1, scope: 'api1' },
        { id: 2, scope: 'api2' },
      ],
      allowedGrantTypes: [{ id: 1, grantType: 'client_credentials' }],
    },
    {
      clientId: 'app-back7',
      id: 9,
      protocolType: 'oidc',
      allowedScopes: [
        { id: 1, scope: 'api1' },
        { id: 2, scope: 'api2' },
      ],
      allowedGrantTypes: [{ id: 1, grantType: 'client_credentials' }],
    },
    {
      clientId: 'app-back8',
      id: 10,
      protocolType: 'oidc',
      allowedScopes: [
        { id: 1, scope: 'api1' },
        { id: 2, scope: 'api2' },
      ],
      allowedGrantTypes: [{ id: 1, grantType: 'client_credentials' }],
    },
    {
      clientId: 'app-back9',
      id: 11,
      protocolType: 'oidc',
      allowedScopes: [
        { id: 1, scope: 'api1' },
        { id: 2, scope: 'api2' },
      ],
      allowedGrantTypes: [{ id: 1, grantType: 'client_credentials' }],
    },
    {
      clientId: 'app-back10',
      id: 12,
      protocolType: 'oidc',
      allowedScopes: [
        { id: 1, scope: 'api1' },
        { id: 2, scope: 'api2' },
      ],
      allowedGrantTypes: [{ id: 1, grantType: 'client_credentials' }],
    },
  ];
}
