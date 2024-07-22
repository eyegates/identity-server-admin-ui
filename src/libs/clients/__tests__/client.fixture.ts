import { Store } from '@ngrx/store';

import type { Client } from '@/libs/clients/models/client.model';
import { TestBed } from '@angular/core/testing';
import { FakeClientsGateway } from '@/libs/clients/infra/fake-clients.gateway';
import { CLIENTSGATEWAY } from '@/libs/clients/models/tokens';
import { ClientsFacade } from '@/libs/clients/state/clients.facade';
import { createTestStore } from '@/libs/common/create-test-store';
import { selectAllClients } from '..';

export const createCientsFixture = () => {
  const clientsGateway = new FakeClientsGateway();
  let store: Store;
  let clientsFacade: ClientsFacade;
  return {
    givenExistingClients(clientList: Client[]) {
      clientsGateway.clients = clientList;
    },
    whenRetrievingClientList() {
      const storeConfig = createTestStore();

      TestBed.configureTestingModule({
        imports: [],
        providers: [
          ...storeConfig.providers,
          {
            provide: CLIENTSGATEWAY,
            useValue: clientsGateway,
          },
        ],
      });
      store = TestBed.inject(Store);
      clientsFacade = TestBed.inject(ClientsFacade);
      clientsFacade.loadClients();
    },
    thenReceivedClientListShoudBe(clientList: Client[]) {
      store.select(selectAllClients).subscribe((clients) => {
        expect(clients).toEqual(clientList);
      });
    },
  };
};

export type ClientFixture = ReturnType<typeof createCientsFixture>;
