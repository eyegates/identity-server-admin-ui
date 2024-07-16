import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

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
  ],
  templateUrl: './list-client.component.html',
  styleUrl: './list-client.component.sass',
})
export class ListClientComponent {
  dataSource = new MatTableDataSource<{
    clientId: string;
    GrantType: string;
  }>([
    {
      clientId: 'client1',
      GrantType: 'client credentials',
    },
    {
      clientId: 'client2',
      GrantType: 'client credentials',
    },
  ]);
  displayedColumns = ['menu', 'ClientId', 'GrantType'];
  resultsLength = 2;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('input') input!: ElementRef;
}
