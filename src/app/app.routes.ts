import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./main/page/main.component').then((m) => m.MainComponent),
  },
];
