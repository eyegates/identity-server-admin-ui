import type { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'clients',
        loadChildren: () =>
          import('./features/clients/clients.routes').then((mod) => mod.routes),
      },
      {
        path: '',
        redirectTo: 'clients',
        pathMatch: 'full',
        data: { reuse: true },
      },
    ],
  },
];
