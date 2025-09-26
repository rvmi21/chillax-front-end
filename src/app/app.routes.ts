// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { Landing } from './pages/landing/landing';
import { Map } from './pages/map/map';

export const routes: Routes = [
  { path: '', component: Landing, data: { animation: 'Landing' } },
  { path: 'map', component: Map, data: { animation: 'Map' } },
  { path: '**', redirectTo: '' }
];
