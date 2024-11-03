import {
  createCientsFixture,
  type ClientFixture,
} from '@/libs/clients/__tests__/client.fixture';
import { stateBuilderProvider } from '@/libs/common';
import { ClientsFacade, type ClientTypes } from '@/libs';
import { TestBed } from '@angular/core/testing';
import { createClientDetailsViewModel } from './client-details.viewmodel';
type Client = ClientTypes.Client;

describe('Clients View Model', () => {
  let clientsFixture: ClientFixture;
  let testStateBuilderProvider = stateBuilderProvider();
  let clientsFacade: ClientsFacade;

  beforeEach(() => {
    clientsFixture = createCientsFixture();
  });

  it("should select a client and it's details", async () => {
    const clientId = 'client1';
    const clientList: Client[] = [
      {
        id: 1,
        clientId: 'client1',
        protocolType: 'oidc',
        allowedGrantTypes: [{ id: 1, grantType: 'client_credentials' }],
        requireClientSecret: true,
        requirePkce: false,
        allowAccessTokensViaBrowser: true,
      },
      {
        id: 2,
        clientId: 'client2',
        protocolType: 'oidc',
        allowedGrantTypes: [{ id: 1, grantType: 'client_credentials' }],
        requireClientSecret: false,
        requirePkce: false,
        allowAccessTokensViaBrowser: false,
      },
    ];
    testStateBuilderProvider.setState((builder) =>
      builder.withClients(clientList)
    );
    clientsFixture.init(testStateBuilderProvider.getState());
    clientsFacade = TestBed.inject(ClientsFacade);
    const viewModel = createClientDetailsViewModel({
      clientsFacade,
      clientId,
    });

    expect(viewModel.capabilities).toEqual([
      'Require secret',
      'Allow AccessTokens Via Browser',
    ]);
    expect(viewModel.selectedClient).toEqual({
      id: 1,
      clientId: 'client1',
      protocolType: 'oidc',
      allowedGrantTypes: [{ id: 1, grantType: 'client_credentials' }],
      requireClientSecret: true,
      requirePkce: false,
      allowAccessTokensViaBrowser: true,
    });
  });
});
