import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ControllerComponent } from './controller/controller.component';
import { ControllerButtonComponent } from './controller-button/controller-button.component';
import { StageComponent } from './stage/stage.component';
import { FlamingoComponent } from './flamingo/flamingo.component';
import { TabsComponent } from './tabs/tabs.component';
import { StatusComponent } from './status/status.component';

@NgModule({
  declarations: [
    AppComponent,
    ControllerComponent,
    ControllerButtonComponent,
    StageComponent,
    FlamingoComponent,
    TabsComponent,
    StatusComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
