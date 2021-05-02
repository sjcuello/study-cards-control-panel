import { NgModule } from "@angular/core";
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { ConfigurationRoutingModule } from './configuration-routing.module';

@NgModule({
    declarations: [
        ConfigurationComponent
    ],
    imports: [
        ConfigurationRoutingModule
    ],
    providers: [ConfigurationComponent]
})
export class ConfigurationModule { }