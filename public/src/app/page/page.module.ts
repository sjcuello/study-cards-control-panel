import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PageComponent } from './page.component';
import { PageRoutingModule } from './page-routing.module';
import { SharedModule } from "../shared/shared.module";
import { NavModule } from "../nav/nav.module";

@NgModule({
    declarations: [
        PageComponent
    ],
    imports: [
        PageRoutingModule,
        CommonModule,
        SharedModule,
        NavModule
    ],
    providers: [PageComponent]
})
export class PageModule { }