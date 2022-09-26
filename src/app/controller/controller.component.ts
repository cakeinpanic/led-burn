import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-controller',
	templateUrl: './controller.component.html',
	styleUrls: ['./controller.component.scss']
})
export class ControllerComponent implements OnInit {
	@Input() name = 'Controller 1';
	isOn = true
	constructor() { }

	ngOnInit(): void {
	}

}
