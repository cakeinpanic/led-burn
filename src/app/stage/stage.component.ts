import { Component, OnInit } from '@angular/core';
import { StageQuery, StageService } from '../stage-store.service';

@Component({
	selector: 'app-stage',
	templateUrl: './stage.component.html',
	styleUrls: ['./stage.component.scss']
})
export class StageComponent implements OnInit {
	buttons$ = this.stageQuery.appliances$

	constructor(private stageService: StageService, private stageQuery: StageQuery) { }

	ngOnInit(): void {
	//this.buttons =
	//	/console.log(this.buttons);
	}


}
