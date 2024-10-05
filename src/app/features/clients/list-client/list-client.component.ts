import { ClientsFacade } from '@/libs';
import {
  Component,
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
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import {
  createClientListViewModel,
  type ClientListViewModel,
} from './clients.viewmodel';

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
  viewModel!: ClientListViewModel;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private clientsFacade: ClientsFacade) {}

  ngOnInit(): void {
    this.viewModel = createClientListViewModel({
      clientsFacade: this.clientsFacade,
    });
  }

  ngAfterViewInit(): void {
    this.paginator.pageSize = this.viewModel.defaultPageSize;
    this.viewModel.bind(this.paginator);
  }
}
