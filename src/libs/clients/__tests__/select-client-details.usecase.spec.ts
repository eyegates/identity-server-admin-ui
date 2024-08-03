import { createCientsFixture, type ClientFixture } from './client.fixture';

describe('Select client details use case', () => {
  let clientsFixture: ClientFixture;

  beforeEach(() => {
    clientsFixture = createCientsFixture();
  });

  it('should load client details', async () => {
    clientsFixture.init({
      clients: {
        ids: [1, 2],
        entities: {
          1: {
            id: 1,
            clientId: 'client1',
            protocolType: 'oidc',
            allowedGrantTypes: [{ id: 1, grantType: 'client_credentials' }],
          },
          2: {
            id: 2,
            clientId: 'client2',
            protocolType: 'oidc',
            allowedGrantTypes: [{ id: 1, grantType: 'client_credentials' }],
          },
        },
        selectedClientId: '',
      },
    });

    clientsFixture.whenSelectClient('client1');

    clientsFixture.thenReceivedClientDetailsShoudBe({
      id: 1,
      clientId: 'client1',
      protocolType: 'oidc',
      allowedGrantTypes: [{ id: 1, grantType: 'client_credentials' }],
    });
  });
});
