import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatToolbar,
  MatToolbarModule,
  MatToolbarRow,
} from '@angular/material/toolbar';

@Component({
  selector: 'ids-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass',
})
export class HeaderComponent {}
