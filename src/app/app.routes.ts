import { Routes } from '@angular/router';

import { HomeComponent, DetailsComponent } from './pages';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    title: 'Rent House - Home',
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Rent House - House Detail',
  },
  {
    path: '**',
    redirectTo: '/home',
  },
];
