import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { AppComponent } from './app.component';
import { ControllerComponent } from './flamingo/controller/controller.component';
import { ControllerButtonComponent } from './flamingo/controller-button/controller-button.component';
import { FlamingoStore } from './services/flamingo-store.service';

import { StageComponent } from './stage/stage.component';
import { FlamingoComponent } from './flamingo/flamingo.component';
import { TabsComponent } from './tabs/tabs.component';
import { StatusComponent } from './status/status.component';
import { MusicComponent } from './stage/music/music.component';
import { StageButtonComponent } from './stage/stage-button/stage-button.component';
import { CodeDoalogComponent } from './stage/code-doalog/code-doalog.component';

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
		MatDialogModule, NoopAnimationsModule,
		MatInputModule,
		ReactiveFormsModule,
		MatButtonModule,
		HttpClientModule,
		AngularSvgIconModule.forRoot()
	],
	providers: [FlamingoStore],
	bootstrap: [AppComponent]
})
export class AppModule {}
