import { Component, OnInit } from '@angular/core';
const names = [
	'Rainbow',
	'Easter',
	'Stage off',
	'Runway',
	'More',
	'Color',
	'Light1',
	'Light2',
	'Garland1',
	'Garland2',
]
@Component({
	selector: 'app-stage',
	templateUrl: './stage.component.html',
	styleUrls: ['./stage.component.scss']
})
export class StageComponent implements OnInit {
	buttons: any[] = []

	constructor() { }

	ngOnInit(): void {
	this.buttons = (new Array(8)).fill(0).map((t, i) => ({ code: i, name: names[i] }));
		console.log(this.buttons);
	}


}
