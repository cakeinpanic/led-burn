import { Component } from '@angular/core';
import { FlamingoService } from './flamingo-store.service';
import { JavaService } from './java.service';
import { StageService } from './stage-store.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	onStage = true;
	noAndroid = false;

	constructor(private java: JavaService, private flamingoService: FlamingoService, private stageService: StageService) {

	}

	ngOnInit() {
		this.noAndroid = !this.java.checkAndroid();

		this.java.androidMessage.subscribe(t => {
			const [signalType, signalBody] = t.split('=');
			console.log(signalType);
			const signalSubType = signalType[0]
			switch (signalSubType) {
				case 'P':
					this.flamingoService.setColorFromSignal(signalBody);
					break;
				case 'A':
					this.stageService.setApplianceStatusFromSignal(+signalType[1], signalBody);
					break;
			}
		});

	}

	goToStage(isStage: boolean) {
		this.onStage = isStage;
	}
}
