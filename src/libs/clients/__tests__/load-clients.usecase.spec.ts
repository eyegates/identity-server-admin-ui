import { TestBed } from '@angular/core/testing';
import { reducers, selectAllClients, type AppState } from '..';
import { provideStore, Store } from '@ngrx/store';
import {
  loadClients,
  loadClientsEffect,
} from '../usecases/load-clients.usecase';
import { clientsGateway } from '../infra/fake-clients.gateway';
import { CLIENTSGATEWAY } from '../models/clients.gateway';
import { provideEffects } from '@ngrx/effects';

let store: Store;
describe('Load clients list use case', () => {
  const initialState: Partial<AppState> = {
    clients: { ids: [], entities: {}, selectedClientId: null },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        provideStore(reducers, { initialState }),
        provideEffects({ loadClientsEffect }),
        {
          provide: CLIENTSGATEWAY,
          useValue: clientsGateway,
        },
      ],
    });

    store = TestBed.inject(Store);
  });

  it('should load clients list', async () => {
    givenExistingClients([
      { id: '1', clientId: 'client1' },
      { id: '2', clientId: 'client2' },
    ]);

    await whenRetrievingClientList();

    thenReceivedClientListShoudBe([
      { id: '1', clientId: 'client1' },
      { id: '2', clientId: 'client2' },
    ]);
  });
});

function thenReceivedClientListShoudBe(
  clientList: { id: string; clientId: string }[]
) {
  store.select(selectAllClients).subscribe((clients) => {
    expect(clients).toEqual(clientList);
  });
}

function whenRetrievingClientList() {
  store.dispatch(loadClients());
}

function givenExistingClients(clientList: { id: string; clientId: string }[]) {
  clientsGateway.clients = clientList;
}
