import { Component } from '@angular/core';
import { JavaService } from './java.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	onStage = true;
noAndroid = false
	constructor(private java: JavaService) {
		try {
			java.sendToAndroid('Hello')
		} catch (e){
			this.noAndroid= true
		}

	}

	goToStage(isStage: boolean) {
		this.onStage = isStage;
	}
}
