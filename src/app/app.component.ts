import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	onStage = false;

	goToStage(isStage: boolean) {
		this.onStage = isStage;
	}
}
