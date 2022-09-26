import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-stage-button',
	templateUrl: './stage-button.component.html',
	styleUrls: ['./stage-button.component.scss']
})
export class StageButtonComponent implements OnInit {
	title = 'Button';

	constructor() { }

	ngOnInit(): void {
	}

}
