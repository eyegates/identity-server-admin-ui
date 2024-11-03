import { Component, Output, EventEmitter, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import type { ClientSecret, SecretType } from '../types';
import { SecretDialog } from './secret-dialog.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'ids-create-secret',
  templateUrl: './client-secrets.component.html',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, DatePipe],
  styleUrls: ['./secrets.sass'],
})
export class CreateClientSecretsComponent {
  @Input() secretTypes: SecretType[] = [];
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(SecretDialog, {
      data: this.secretTypes,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.secretList.push(result);
        this.hasSecret = this.secretList.length > 0;
        this.secretChanged.emit(this.secretList);
      }
    });
  }
  secretList: ClientSecret[] = [];
  hasSecret = this.secretList.length > 0;

  @Output() secretChanged = new EventEmitter();

  removeSecret(s: ClientSecret) {
    this.secretList = this.secretList.filter((t) => t != s);
    this.hasSecret = this.secretList.length > 0;
    this.secretChanged.emit(this.secretList);
  }
}
