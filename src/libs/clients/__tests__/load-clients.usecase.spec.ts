import { Store } from '@ngrx/store';
import { createCientsFixture, type ClientFixture } from './client.fixture';

let store: Store;
describe('Load clients list use case', () => {
  let clientsFixture: ClientFixture;

  beforeEach(() => {
    clientsFixture = createCientsFixture();
  });

  it('should load clients list', async () => {
    clientsFixture.givenExistingClients([
      {
        id: 1,
        clientId: 'client1',
        protocolType: 'oidc',
        allowedGrantTypes: [{ id: 1, grantType: 'client-credentials' }],
      },
      {
        id: 2,
        clientId: 'client2',
        protocolType: 'oidc',
        allowedGrantTypes: [{ id: 1, grantType: 'client-credentials' }],
      },
    ]);

    clientsFixture.whenRetrievingClientList();

    clientsFixture.thenReceivedClientListShoudBe([
      {
        id: 1,
        clientId: 'client1',
        protocolType: 'oidc',
        allowedGrantTypes: [{ id: 1, grantType: 'client-credentials' }],
      },
      {
        id: 2,
        clientId: 'client2',
        protocolType: 'oidc',
        allowedGrantTypes: [{ id: 1, grantType: 'client-credentials' }],
      },
    ]);
  });
});
