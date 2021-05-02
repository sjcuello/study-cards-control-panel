import { NgModule } from "@angular/core";
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NotFoundRoutingModule } from './not-found-routing.module';

@NgModule({
    declarations: [
        NotFoundComponent
    ],
    imports: [
        NotFoundRoutingModule
    ],
    providers: [NotFoundComponent]
})
export class NotFoundModule { }