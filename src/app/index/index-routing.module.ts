import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexPage } from './index.page';

const routes: Routes = [
  {
    path: '',
    component: IndexPage,
    children: [
      {
        path: '',
        loadChildren: () =>
        import('../pages/welcome/welcome.module').then(m => m.WelcomePageModule
        )
        },
        {
          path: 'login',
          loadChildren: () =>
          import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexPageRoutingModule {}
