import { createCientsFixture, type ClientFixture } from './client.fixture';

describe('Load clients list use case', () => {
  let clientsFixture: ClientFixture;

  beforeEach(() => {
    clientsFixture = createCientsFixture();
  });

  it('should load clients list', async () => {
    clientsFixture.init();
    clientsFixture.givenExistingRemoteClients([
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

    clientsFixture.whenRetrievingClientList();

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
  });
});
