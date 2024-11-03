import { createCientsFixture, type ClientFixture } from './client.fixture';
import type { Client } from '../models/client.model';

describe('Create client use case', () => {
  let clientsFixture: ClientFixture;
  let remoteClientList: Client[] = [
    {
      id: 1,
      clientId: 'client1',
      protocolType: 'oidc',
      allowedGrantTypes: [{ id: 1, grantType: 'client_credentials' }],
    },
  ];

  beforeEach(() => {
    clientsFixture = createCientsFixture();
  });

  it('should create client', async () => {
    clientsFixture.init();
    clientsFixture.whenCreateClient({
      id: 1,
      clientId: 'client1',
      protocolType: 'oidc',
      allowedGrantTypes: [{ id: 1, grantType: 'client_credentials' }],
    });
    clientsFixture.whenRetrievingClientList({ offset: 0, pageSize: 10 });
    clientsFixture.thenRemoteClientListShoudBe([
      {
        id: 1,
        clientId: 'client1',
        protocolType: 'oidc',
        allowedGrantTypes: [{ id: 1, grantType: 'client_credentials' }],
      },
    ]);
    clientsFixture.thenTotalCountShouldBe(1);
  });

  it('should create client when other clients exist', async () => {
    clientsFixture.init();
    clientsFixture.givenExistingRemoteClients(remoteClientList);
    clientsFixture.whenCreateClient({
      id: 2,
      clientId: 'client2',
      protocolType: 'oidc',
      allowedGrantTypes: [{ id: 1, grantType: 'client_credentials' }],
    });
    clientsFixture.whenRetrievingClientList({ offset: 0, pageSize: 10 });
    clientsFixture.thenRemoteClientListShoudBe([
      {
        id: 1,
        clientId: 'client1',
        protocolType: 'oidc',
        allowedGrantTypes: [{ id: 1, grantType: 'client_credentials' }],
      },
      {
        id: 2,
        clientId: 'client2',
        protocolType: 'oidc',
        allowedGrantTypes: [{ id: 1, grantType: 'client_credentials' }],
      },
    ]);
    clientsFixture.thenTotalCountShouldBe(2);
  });
});
