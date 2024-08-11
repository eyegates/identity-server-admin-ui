import {
  type ClientsFacade,
  selectAllClients,
  selectTotalClients,
  type Client,
} from '@/libs';
import { MatTableDataSource } from '@angular/material/table';
import { select, type Store } from '@ngrx/store';

export const createClientListViewModel = ({
  store,
  clientsFacade,
}: {
  store: Store;
  clientsFacade: ClientsFacade;
}) => {
  let clients = store.pipe(select(selectAllClients));
  let totalClients = store.pipe(select(selectTotalClients));

  const displayedColumns = ['menu', 'ClientId', 'GrantType'];
  const pageSizeOptions = [5, 10, 20];

  let clientTableDatasource: MatTableDataSource<Client> =
    new MatTableDataSource<Client>();
  let resultsLength = 0;

  clientsFacade.loadClients();
  clients.subscribe((clients) => {
    clientTableDatasource.data = clients;
  });
  totalClients.subscribe((total) => {
    resultsLength = total;
  });

  return {
    displayedColumns,
    clientTableDatasource,
    resultsLength,
    pageSizeOptions,
  };
};