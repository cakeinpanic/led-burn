import { Component, OnInit } from '@angular/core';
import { StageQuery, StageService } from '../services/stage-store.service';

@Component({
	selector: 'app-stage',
	templateUrl: './stage.component.html',
	styleUrls: ['./stage.component.scss']
})
export class StageComponent implements OnInit {
	buttons$ = this.stageQuery.appliances$;
	effects$ = this.stageQuery.effects$;
	fullMode = false;

	constructor(private stageService: StageService, private stageQuery: StageQuery) { }

	ngOnInit(): void {
		//this.buttons =
		//	/console.log(this.buttons);
	}

	toFullMode() {
		this.fullMode = !this.fullMode;
	}

}
