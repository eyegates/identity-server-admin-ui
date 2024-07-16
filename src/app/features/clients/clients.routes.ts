import type { Routes } from '@angular/router';
import { CreateClientComponent } from './create-client/create-client.component';
import { ListClientComponent } from './list-client/list-client.component';
import { DetailsClientComponent } from './details-client/details-client.component';

export const routes: Routes = [
  { path: '', component: ListClientComponent },
  { path: 'create', component: CreateClientComponent },
  { path: ':clientId/details', component: DetailsClientComponent },
  // { path: ':clientId/edit', component: ClientEditComponent }
];
