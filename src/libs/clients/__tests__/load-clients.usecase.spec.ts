import type { Client } from '../models/client.model';
import { createCientsFixture, type ClientFixture } from './client.fixture';

describe('Load clients list use case', () => {
  let clientsFixture: ClientFixture;
  let remoteClientList: Client[] = [
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
  ];

  beforeEach(() => {
    clientsFixture = createCientsFixture();
  });

  it('should load clients list', async () => {
    clientsFixture.init();
    clientsFixture.givenExistingRemoteClients(remoteClientList);
    clientsFixture.whenRetrievingClientList({ offset: 0, pageSize: 10 });
    clientsFixture.thenReceivedClientListShoudBe([
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

  it('should load clients paginated list', async () => {
    clientsFixture.init();
    clientsFixture.givenExistingRemoteClients(remoteClientList);
    clientsFixture.whenRetrievingClientList({ offset: 1, pageSize: 1 });
    clientsFixture.thenReceivedClientListShoudBe([
      {
        id: 2,
        clientId: 'client2',
        protocolType: 'oidc',
        allowedGrantTypes: [{ id: 1, grantType: 'client_credentials' }],
      },
    ]);
    clientsFixture.thenTotalCountShouldBe(2);
  });

  it('should load clients filtered list', async () => {
    clientsFixture.init();
    clientsFixture.givenExistingRemoteClients(remoteClientList);
    clientsFixture.whenRetrievingClientList({
      offset: 0,
      pageSize: 10,
      filter: 'client1',
    });
    clientsFixture.thenReceivedClientListShoudBe([
      {
        id: 1,
        clientId: 'client1',
        protocolType: 'oidc',
        allowedGrantTypes: [{ id: 1, grantType: 'client_credentials' }],
      },
    ]);
    clientsFixture.thenTotalCountShouldBe(1);
  });
});
