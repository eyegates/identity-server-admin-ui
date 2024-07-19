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
      { id: 1, clientId: 'client1', protocolType: 'oidc' },
      { id: 2, clientId: 'client2', protocolType: 'oidc' },
    ]);

    clientsFixture.whenRetrievingClientList();

    clientsFixture.thenReceivedClientListShoudBe([
      { id: 1, clientId: 'client1', protocolType: 'oidc' },
      { id: 2, clientId: 'client2', protocolType: 'oidc' },
    ]);
  });
});

// function thenReceivedClientListShoudBe(clientList: Client[]) {
//   store.select(selectAllClients).subscribe((clients) => {
//     expect(clients).toEqual(clientList);
//   });
// }

// function whenRetrievingClientList() {
//   store.dispatch(loadClients());
// }

// function givenExistingClients(clientList: Client[]) {
//   clientsGateway.clients = clientList;
// }
