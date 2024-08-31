import { ClientsFacade } from '@/libs';
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
import { ActivatedRoute, RouterModule } from '@angular/router';
import { createClientDetailsViewModel } from './client-details.viewmodel';

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
  viewModel!: ReturnType<typeof createClientDetailsViewModel>;

  constructor(
    private route: ActivatedRoute,
    private clientsFacade: ClientsFacade
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.viewModel = createClientDetailsViewModel({
        clientsFacade: this.clientsFacade,
        clientId: params['clientId'],
      });
    });
  }
}
