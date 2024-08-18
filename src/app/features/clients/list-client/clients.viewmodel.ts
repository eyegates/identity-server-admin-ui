import { type ClientsFacade, type Client } from '@/libs';
import { MatTableDataSource } from '@angular/material/table';

export const createClientListViewModel = ({
  clientsFacade,
}: {
  clientsFacade: ClientsFacade;
}) => {
  let clients = clientsFacade.allClients;
  let totalClients = clientsFacade.totalClient;

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
