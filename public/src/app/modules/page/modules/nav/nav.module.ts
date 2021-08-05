import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material/material.module';
import { NavComponent } from './components/nav/nav.component';
import { NavRoutingModule } from './nav-routing.module';


@NgModule({
  declarations: [NavComponent],
  imports: [
    NavRoutingModule,
    MaterialModule
  ],
  exports: [NavComponent],
})
export class NavModule { }
