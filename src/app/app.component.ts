import { Component } from '@angular/core';
import { JavaService } from './java.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	onStage = true;

	constructor(private java: JavaService) {
		java.sendToAndroid('Hello')

	}

	goToStage(isStage: boolean) {
		this.onStage = isStage;
	}
}
