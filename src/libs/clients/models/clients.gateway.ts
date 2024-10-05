import type { Observable } from 'rxjs';
import type { Client } from './client.model';

export type PagingAndFilteringOptions = {
  offset: number;
  pageSize: number;
  filter?: string;
};

export type GatewayResponse<T> = {
  data: T[];
  totalCount: number;
};

export interface ClientsGateway {
  loadClients: (
    options: PagingAndFilteringOptions
  ) => Observable<GatewayResponse<Client>>;
}
