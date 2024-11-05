import { Component, type OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { buildCreateClientViewModel } from './create-client.viewmodel';
import { CreateClientSecretsComponent } from '../shared/client-secrets/create-client-secrets.component';
import { JsonPipe } from '@angular/common';
import { CreateGrantTypeComponent } from '../shared/client-grant-types/create-grant-type.component';
import { CreateClientScopeComponent } from '../shared/client-scopes/create-client-scope.component';

@Component({
  selector: 'ids-create-client',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatCardModule,
    MatStepperModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    FormsModule,
    ReactiveFormsModule,
    JsonPipe,
    CreateClientSecretsComponent,
    CreateGrantTypeComponent,
    CreateClientScopeComponent,
  ],
  templateUrl: './create-client.component.html',
  styleUrl: './create-client.component.sass',
})
export class CreateClientComponent implements OnInit {
  viewModel!: ReturnType<typeof buildCreateClientViewModel>;
  constructor(private _formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.viewModel = buildCreateClientViewModel(this._formBuilder);
  }
}
