import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('@frontend/feature/home').then((m) => m.Home),
  },
];
