import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { GrantTypeDialog } from './grant-type-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import type { GrantType, GrantTypeData } from '../types';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'create-grant-type',
  templateUrl: './create-grant-type.component.html',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatChipsModule],
})
export class CreateGrantTypeComponent {
  GranTypes: GrantType[] = [];
  hasGrantTypes = this.GranTypes.length > 0;
  @Input() grantTypeData: GrantTypeData[] = [];
  @Output() gtSelectionChange = new EventEmitter();

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(GrantTypeDialog, {
      width: '350px',
      data: {
        grantTypeData: this.grantTypeData,
        grantTypes: this.GranTypes,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.length > 0) {
        this.GranTypes = result;
        this.hasGrantTypes = this.GranTypes.length > 0;
        this.gtSelectionChange.emit(this.GranTypes);
      }
    });
  }

  removeGrantType(grantType: GrantType) {
    this.GranTypes = this.GranTypes.filter((t) => t != grantType);
    this.hasGrantTypes = this.GranTypes.length > 0;
    this.gtSelectionChange.emit(this.GranTypes);
  }
}
