import { Component } from '@angular/core';
import { FlamingoService } from './services/flamingo-store.service';
import { JavaService } from './services/java.service';
import { StageService } from './services/stage-store.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	onStage = false;
	noAndroid = false;

	constructor(private java: JavaService, private flamingoService: FlamingoService, private stageService: StageService) {

	}

	ngOnInit() {
		this.noAndroid = !this.java.checkAndroid();
		this.java.requestStatus();
		this.java.androidMessage.subscribe(t => {
			const [signalType, signalBody] = t.split('=');

			const signalSubType = signalType[0];
			console.log(signalType, signalBody, signalSubType);
			switch (signalSubType) {
				case 'P':
					this.flamingoService.setColorFromSignal(signalBody);
					break;
				case 'A':
					this.stageService.setApplianceStatusFromSignal(+signalType.substring(1), signalBody);
					break;
			}
		});

	}

	goToStage(isStage: boolean) {
		this.onStage = isStage;
	}
}
