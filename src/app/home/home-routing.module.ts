import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guard/auth.guard';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    canActivate: [AuthGuard],
    component: HomePage,
    children: [
      {
        path: 'asociados',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('../asociado/asociado.module').then(
            m => m.AsociadoPageModule
          )
      },
      {
        path: 'detalles',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('../detalles/detalles.module').then
            (m => m.DetallesPageModule)
      },
      {
        path: 'settings',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('../pages/settings/settings.module').then(
            m => m.SettingsPageModule
          )
      },
      {
        path: 'home',
        canActivate: [AuthGuard],
        loadChildren: () => import('./home/home.module').then( 
          m => m.HomePageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule { }
