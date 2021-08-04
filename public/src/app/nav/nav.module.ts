import { NgModule } from '@angular/core';
import { NavComponent } from './components/nav/nav.component';
import { NavRoutingModule } from './nav-routing.module';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [NavComponent],
  imports: [
    NavRoutingModule,
    MaterialModule
  ]
})
export class NavModule { }
