import type { SecretType } from '@/libs/clients/models/client.model';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import type { ClientSecret } from '../types';
import { MatIconModule } from '@angular/material/icon';
import {
  MatOptionModule,
  provideNativeDateAdapter,
} from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'ids-secret-dialog',
  templateUrl: './secret-dialog-content.html',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatIconModule,
    MatDatepickerModule,
    MatOptionModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
})
export class SecretDialog {
  secret: ClientSecret = {
    id: 0,
    description: '',
    value:
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15),
    type: 'SharedSecret',
  };
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public readonly secretTypes: SecretType[]
  ) {}

  generateSecret() {
    this.secret.value =
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);
  }
}
