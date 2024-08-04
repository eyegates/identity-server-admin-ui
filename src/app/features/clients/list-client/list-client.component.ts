import {
  ClientsFacade,
  type Client,
  type AppState,
  selectAllClients,
} from '@/libs';
import {
  Component,
  ElementRef,
  ViewChild,
  type AfterViewInit,
  type OnInit,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'ids-list-client',
  standalone: true,
  imports: [
    MatTableModule,
    MatToolbarModule,
    RouterModule,
    MatFormFieldModule,
    MatMenuModule,
    MatIconModule,
    MatPaginatorModule,
    MatInputModule,
    MatButtonModule,
    MatChipsModule,
  ],

  templateUrl: './list-client.component.html',
  styleUrl: './list-client.component.sass',
})
export class ListClientComponent implements AfterViewInit, OnInit {
  clients: Observable<Client[]> = new Observable<Client[]>();
  dataSource = new MatTableDataSource<Client>();
  displayedColumns = ['menu', 'ClientId', 'GrantType'];
  resultsLength = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('input') input!: ElementRef;

  constructor(
    private clientsFacade: ClientsFacade,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.clients = this.store.pipe(select(selectAllClients));
    this.clientsFacade.loadClients();
    this.clients.subscribe((clients) => {
      this.dataSource.data = clients;
      this.resultsLength = clients.length;
    });
  }

  ngAfterViewInit(): void {
    this.paginator.pageSize = 10;
    this.dataSource.paginator = this.paginator;
  }
}
