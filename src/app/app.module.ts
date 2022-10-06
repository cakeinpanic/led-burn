import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { ControllerButtonComponent } from './flamingo/controller-button/controller-button.component';
import { ControllerComponent } from './flamingo/controller/controller.component';
import { FlamingoComponent } from './flamingo/flamingo.component';
import { FlamingoStore } from './services/flamingo-store.service';
import { CodeDoalogComponent } from './stage/code-doalog/code-doalog.component';
import { MusicComponent } from './stage/music/music.component';
import { StageButtonComponent } from './stage/stage-button/stage-button.component';

import { StageComponent } from './stage/stage.component';
import { StatusComponent } from './status/status.component';
import { TabsComponent } from './tabs/tabs.component';

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
		StageButtonComponent,
		CodeDoalogComponent
	],
	imports: [
		BrowserModule,
		MatMenuModule,
		MatDialogModule, NoopAnimationsModule,
		MatInputModule,
		MatIconModule,
		ReactiveFormsModule,
		MatButtonModule,
		HttpClientModule
	],
	providers: [FlamingoStore],
	bootstrap: [AppComponent]
})
export class AppModule {}
