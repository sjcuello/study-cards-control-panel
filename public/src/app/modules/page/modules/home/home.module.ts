import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        HomeRoutingModule,
        CommonModule,
        HttpClientModule
    ],
    providers: [HomeComponent]
})
export class HomeModule { }