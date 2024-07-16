import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'ids-menu',
  standalone: true,
  imports: [MatListModule, RouterModule],
  templateUrl: './menu.component.html',
})
export class MenuComponent {}
