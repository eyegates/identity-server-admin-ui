import { Component, EventEmitter, Output } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import type { ClientScope } from '../types';
import { MatButtonModule } from '@angular/material/button';
import { ScopeDialogComponent } from './scope-dialog.component';

@Component({
  selector: 'ids-create-client-scope',
  standalone: true,
  imports: [
    MatIconModule,
    MatChipsModule,
    MatButtonModule,
    ScopeDialogComponent,
  ],
  templateUrl: './client-scope.component.html',
})
export class CreateClientScopeComponent {
  scopes: ClientScope[] = [];
  hasScopes = this.scopes.length > 0;
  @Output() scopeChanged = new EventEmitter();

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(ScopeDialogComponent, {
      width: '350px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.scopes.push(result);
        this.hasScopes = this.scopes.length > 0;
        this.scopeChanged.emit(this.scopes);
      }
    });
  }

  deleteScope(scope: ClientScope) {
    this.scopes = this.scopes.filter((u) => u !== scope);
    this.hasScopes = this.scopes.length > 0;
    this.scopeChanged.emit(this.scopes);
  }
}
