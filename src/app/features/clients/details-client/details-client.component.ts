import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
import { RouterModule } from '@angular/router';

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
export class DetailsClientComponent {
  uris: {
    id: number;
    redirectUri: string;
  }[] = [];

  secrets: {
    id: number;
    description: string;
    value: string;
    expiration: Date;
    type: string;
  }[] = [];
  claims: {
    id: number;
    type: string;
    value: string;
  }[] = [];
  origins: {
    id: number;
    origin: string;
  }[] = [];
  puris: {
    id: number;
    postLogoutRedirectUri: string;
  }[] = [];
  properties: {
    id: number;
    key: string;
    value: string;
  }[] = [];
}
