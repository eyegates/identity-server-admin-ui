import { Store } from '@ngrx/store';

import type { Client } from '@/libs/clients/models/client.model';
import { TestBed } from '@angular/core/testing';
import { FakeClientsGateway } from '@/libs/clients/infra/fake-clients.gateway';
import { ClientsFacade } from '@/libs/clients/state/clients.facade';
import {
  selectAllClients,
  selectCurrentClient,
  selectTotalClients,
} from '@/libs';
import { CLIENTSGATEWAY } from '@/libs/clients/models/tokens';
import { createStore, type AppState } from '@/libs/common';

export const createCientsFixture = () => {
  const clientsGateway = new FakeClientsGateway();
  let store: Store;
  let clientsFacade: ClientsFacade;
  return {
    init(initialState?: Partial<AppState>) {
      TestBed.configureTestingModule({
        imports: [],
        providers: [
          createStore({
            initialState,
            dependencies: {
              providers: [
                { provide: CLIENTSGATEWAY, useClass: FakeClientsGateway },
              ],
            },
          }),
        ],
      });
    },
    givenExistingRemoteClients(clientList: Client[]) {
      clientsGateway.clients = clientList;
      TestBed.overrideProvider(CLIENTSGATEWAY, { useValue: clientsGateway });
    },
    whenSelectClient(clientId: string) {
      store = TestBed.inject(Store);
      clientsFacade = TestBed.inject(ClientsFacade);
      clientsFacade.selectClient(clientId);
    },
    whenRetrievingClientList(pageAndFilterOptions: {
      offset: number;
      pageSize: number;
      filter?: string;
    }) {
      store = TestBed.inject(Store);
      clientsFacade = TestBed.inject(ClientsFacade);
      const { offset, pageSize, filter } = pageAndFilterOptions;
      clientsFacade.loadClients({ offset, pageSize, filter });
    },
    thenReceivedClientListShoudBe(clientList: Client[]) {
      store.select(selectAllClients).subscribe((clients) => {
        expect(clients).toEqual(clientList);
      });
    },
    thenReceivedClientDetailsShoudBe(clientDetails: Client) {
      store = TestBed.inject(Store);
      store.select(selectCurrentClient).subscribe((client) => {
        expect(client).toEqual(clientDetails);
      });
    },
    thenTotalCountShouldBe(count: number) {
      store.select(selectTotalClients).subscribe((clientCount) => {
        expect(clientCount).toEqual(count);
      });
    },
  };
};

export type ClientFixture = ReturnType<typeof createCientsFixture>;
