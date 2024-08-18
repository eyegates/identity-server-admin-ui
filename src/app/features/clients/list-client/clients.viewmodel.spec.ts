import {
  createCientsFixture,
  type ClientFixture,
} from '@/libs/clients/__tests__/client.fixture';
import { stateBuilderProvider } from '@/libs/common';
import { createClientListViewModel } from './clients.viewmodel';
import { ClientsFacade, type Client } from '@/libs';
import { TestBed } from '@angular/core/testing';

describe('Clients View Model', () => {
  let clientsFixture: ClientFixture;
  let testStateBuilderProvider = stateBuilderProvider();
  let clientsFacade: ClientsFacade;

  beforeEach(() => {
    clientsFixture = createCientsFixture();
  });

  it('should load clients list', async () => {
    const clientList: Client[] = [
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
    clientsFacade = TestBed.inject(ClientsFacade);
    const viewModel = createClientListViewModel({
      clientsFacade,
    });

    expect(viewModel.clientTableDatasource.data).toEqual(clientList);
    expect(viewModel.displayedColumns).toEqual([
      'menu',
      'ClientId',
      'GrantType',
    ]);
    expect(viewModel.resultsLength).toBe(2);
    expect(viewModel.pageSizeOptions).toEqual([5, 10, 20]);
  });
});
