import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ControllerComponent } from './controller/controller.component';
import { ControllerButtonComponent } from './controller-button/controller-button.component';
import { FlamingoStore } from './services/flamingo-store.service';

import { StageComponent } from './stage/stage.component';
import { FlamingoComponent } from './flamingo/flamingo.component';
import { TabsComponent } from './tabs/tabs.component';
import { StatusComponent } from './status/status.component';
import { MusicComponent } from './stage/music/music.component';
import { StageButtonComponent } from './stage/stage-button/stage-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ControllerComponent,
    ControllerButtonComponent,
    StageComponent,
    FlamingoComponent,
    TabsComponent,
    StatusComponent,
    MusicComponent,
    StageButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [FlamingoStore],
  bootstrap: [AppComponent]
})
export class AppModule { }
