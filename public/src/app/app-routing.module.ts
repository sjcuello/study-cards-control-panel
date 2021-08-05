import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PageComponent } from './modules/page/page.component';



const routes: Routes = [
  {
    path: '',
    component: PageComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home',
      },
      {
        path: 'home',
        loadChildren: () => import('./modules/page/modules/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'configuration',
        loadChildren: () => import('./modules/page/modules/configuration/configuration.module').then(m => m.ConfigurationModule)
      },
      {
        path: 'nav',
        loadChildren: () => import('./modules/page/modules/nav/nav.module').then(m => m.NavModule)
      },
    ],
  },
  {
    path: 'not-found',
    loadChildren: () => import('./modules/not-found/not-found.module').then(m => m.NotFoundModule)
  },
  {
    path: '**',
    redirectTo: 'not-found',
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
