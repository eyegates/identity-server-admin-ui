import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [MatSidenavModule, RouterOutlet, HeaderComponent, MenuComponent],
  templateUrl: './layout.component.html',
})
export class LayoutComponent {}
