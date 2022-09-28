import { Component } from '@angular/core';
import { FlamingoService } from './flamingo-store.service';
import { JavaService } from './java.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	onStage = false;
	noAndroid = false;

	constructor(private java: JavaService, private flamingoService: FlamingoService) {

	}

	ngOnInit() {
		this.noAndroid = !this.java.checkAndroid();

		this.java.androidMessage.subscribe(t => {
			const [signalType, signalBody] = t.split('=');
			console.log(signalType);
			switch (signalType) {
				case 'P':
					this.flamingoService.setColorFromSignal(signalBody);
					break;
			}
		});

	}

	goToStage(isStage: boolean) {
		this.onStage = isStage;
	}
}
