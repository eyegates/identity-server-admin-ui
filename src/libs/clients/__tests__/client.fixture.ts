import { Store } from '@ngrx/store';
import { createStore, selectAllClients } from '..';
import { FakeClientsGateway } from '../infra/fake-clients.gateway';
import type { Client } from '../models/client.model';
import { loadClients } from '../usecases/load-clients.usecase';
import { TestBed } from '@angular/core/testing';
import { CLIENTSGATEWAY } from '../models/clients.gateway';

export const createCientsFixture = () => {
  const clientsGateway = new FakeClientsGateway();
  let store: Store;
  return {
    givenExistingClients(clientList: Client[]) {
      clientsGateway.clients = clientList;
    },
    whenRetrievingClientList() {
      const storeConfig = createStore([
        {
          provide: CLIENTSGATEWAY,
          useValue: clientsGateway,
        },
      ]);

      TestBed.configureTestingModule({
        imports: [],
        providers: [...storeConfig.providers],
      });
      store = TestBed.inject(Store);
      store.dispatch(loadClients());
    },
    thenReceivedClientListShoudBe(clientList: Client[]) {
      store.select(selectAllClients).subscribe((clients) => {
        expect(clients).toEqual(clientList);
      });
    },
  };
};

export type ClientFixture = ReturnType<typeof createCientsFixture>;
