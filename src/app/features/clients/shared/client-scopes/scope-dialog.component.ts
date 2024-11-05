import { Component } from '@angular/core';
import type { ClientScope } from '../types';
import {
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'ids-scope-dialog',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
  ],
  templateUrl: './scope-dialog.component.html',
})
export class ScopeDialogComponent {
  scope: ClientScope = <ClientScope>{ id: 0, scope: '' };
  constructor() {}
}
