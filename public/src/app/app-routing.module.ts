import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { ConfigurationComponent } from './configuration/configuration.component'
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component'

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'configuration',
    component: ConfigurationComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'not-found',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
