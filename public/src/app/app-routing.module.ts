import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { PageComponent } from './page/page.component'

const routes: Routes = [
  {
    path: '',
    component: PageComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'configuration',
        loadChildren: () => import('./configuration/configuration.module').then(m => m.ConfigurationModule)
      },
      {
        path: 'nav',
        loadChildren: () => import('./nav/nav.module').then(m => m.NavModule)
      },
      {
        path: 'not-found',
        loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule)
      },
      {
        path: '**',
        redirectTo: 'not-found',
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
