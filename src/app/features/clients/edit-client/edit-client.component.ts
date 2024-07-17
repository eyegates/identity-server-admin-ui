import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'ids-edit-client',
  standalone: true,
  imports: [
    MatToolbarModule,
    CommonModule,
    MatCardModule,
    MatStepperModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatChipsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './edit-client.component.html',
  styleUrl: './edit-client.component.sass',
})
export class EditClientComponent {}
