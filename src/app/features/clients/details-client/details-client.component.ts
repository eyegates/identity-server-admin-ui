import {
  type AppState,
  type Client,
  ClientsFacade,
  selectCurrentClient,
} from '@/libs';
import { CommonModule } from '@angular/common';
import { Component, type OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'ids-details-client',
  standalone: true,
  imports: [
    MatToolbarModule,
    RouterModule,
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatTableModule,
    MatChipsModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
  ],
  templateUrl: './details-client.component.html',
  styleUrl: './details-client.component.sass',
})
export class DetailsClientComponent implements OnInit {
  client!: Client;

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private router: Router,
    private clientsFacade: ClientsFacade
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.store
        .pipe(select(selectCurrentClient))
        .subscribe((client) => (this.client = client));
      this.clientsFacade.selectClient(params['clientId']);
    });
  }
}
