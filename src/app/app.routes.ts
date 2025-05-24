import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/page/home.component').then((m) => m.HomeComponent),
  },
];
