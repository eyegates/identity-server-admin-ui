import { type ClientsFacade, type Client } from '@/libs';
import type { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { debounceTime, distinctUntilChanged, merge, Subject, tap } from 'rxjs';

export class ClientListViewModel {
  clientTableDatasource = new MatTableDataSource<Client>();
  resultsLength = 0;
  displayedColumns: string[];
  pageSizeOptions: number[];
  defaultPageSize: number;
  filter: string = '';
  filterSubject: Subject<string> = new Subject<string>();
  clientsFacade: ClientsFacade;
  constructor({
    displayedColumns,
    pageSizeOptions,
    defaultPageSize,
    clientsFacade,
  }: {
    displayedColumns: string[];
    pageSizeOptions: number[];
    defaultPageSize: number;
    clientsFacade: ClientsFacade;
  }) {
    this.displayedColumns = displayedColumns;
    this.pageSizeOptions = pageSizeOptions;
    this.defaultPageSize = defaultPageSize;
    this.clientsFacade = clientsFacade;

    this.clientsFacade.loadClients({
      offset: 0,
      pageSize: this.defaultPageSize,
      filter: this.filter.toLocaleLowerCase(),
    });
    this.clientsFacade.allClients.subscribe((clients) => {
      this.clientTableDatasource.data = clients;
    });
    this.clientsFacade.totalClient.subscribe((total) => {
      this.resultsLength = total;
    });
  }

  bind(paginator: MatPaginator) {
    let filter$ = this.filterSubject.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap((value: string) => {
        paginator.pageIndex = 0;
        this.filter = value.toLowerCase();
      })
    );
    merge(filter$, paginator.page)
      .pipe(
        tap(() =>
          this.clientsFacade.loadClients({
            offset: paginator.pageIndex,
            pageSize: paginator.pageSize,
            filter: this.filter.toLocaleLowerCase(),
          })
        )
      )
      .subscribe();
  }
}

export const createClientListViewModel = ({
  clientsFacade,
}: {
  clientsFacade: ClientsFacade;
}): ClientListViewModel => {
  return new ClientListViewModel({
    displayedColumns: ['menu', 'ClientId', 'GrantType'],
    pageSizeOptions: [5, 10, 20],
    defaultPageSize: 10,
    clientsFacade,
  });
};
