import { stateBuilderProvider } from '@/libs/common';
import { createCientsFixture, type ClientFixture } from './client.fixture';

describe('Select client details use case', () => {
  let clientsFixture: ClientFixture;
  let testStateBuilderProvider = stateBuilderProvider();
  beforeEach(() => {
    clientsFixture = createCientsFixture();
  });

  it('should load client details', async () => {
    testStateBuilderProvider.setState((builder) =>
      builder.withClients([
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
      ])
    );
    clientsFixture.init(testStateBuilderProvider.getState());

    clientsFixture.whenSelectClient('client1');

    clientsFixture.thenReceivedClientDetailsShoudBe({
      id: 1,
      clientId: 'client1',
      protocolType: 'oidc',
      allowedGrantTypes: [{ id: 1, grantType: 'client_credentials' }],
    });
  });
});
