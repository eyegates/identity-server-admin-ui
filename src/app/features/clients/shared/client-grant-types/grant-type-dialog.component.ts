import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import type { GrantType, GrantTypeData } from '../types';
import { MatIconModule } from '@angular/material/icon';
import { MatOptionModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'ids-grant-type-dialog',
  templateUrl: './grant-type-dialog-content.html',
  standalone: true,
  imports: [
    MatIconModule,
    MatOptionModule,
    MatListModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
})
export class GrantTypeDialog {
  alreadySelected: GrantType[] = [];
  grantTypesData: GrantTypeData[] = [];
  SelectedGrantTypes: GrantTypeData[] = [];
  grantTypes: GrantType[] = [];
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { grantTypes: GrantType[]; grantTypeData: GrantTypeData[] }
  ) {}

  ngOnInit() {
    this.initializeGrantTypes();
    this.updateGrantTypeSelections();
  }

  initializeGrantTypes(): void {
    this.grantTypesData = this.data.grantTypeData;
    this.SelectedGrantTypes = this.data.grantTypes.map((gt) => {
      this.alreadySelected.push(gt);
      return this.findGrantTypeData(gt.grantType);
    });
  }

  findGrantTypeData(type: string): GrantTypeData {
    return this.grantTypesData.find((data) => data.type === type)!;
  }

  updateGrantTypeSelections(): void {
    const selectedType = this.SelectedGrantTypes.find((s) =>
      ['implicit', 'hybrid', 'authorization_code'].includes(s.type)
    );

    const toDisableTypes = this.getToDisableTypes(selectedType?.type);
    const toEnableTypes = !selectedType
      ? ['implicit', 'hybrid', 'authorization_code']
      : [];

    this.updateSelectableStatus(toDisableTypes, false);
    this.updateSelectableStatus(toEnableTypes, true);
  }

  getToDisableTypes(selectedType: string | undefined): string[] {
    switch (selectedType) {
      case 'implicit':
        return ['hybrid', 'authorization_code'];
      case 'hybrid':
        return ['implicit', 'authorization_code'];
      case 'authorization_code':
        return ['implicit', 'hybrid'];
      default:
        return [];
    }
  }

  updateSelectableStatus(types: string[], status: boolean): void {
    this.grantTypesData.forEach((data) => {
      if (types.includes(data.type)) {
        data.selectable = status;
      }
    });
  }

  onNgModelChange(): void {
    this.grantTypes = this.SelectedGrantTypes.map(
      (gt) => ({ grantType: gt.type } as GrantType)
    );
    this.updateGrantTypeSelections();
  }
}
