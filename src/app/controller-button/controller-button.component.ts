import { Component, HostBinding, HostListener, Input, OnInit } from '@angular/core';

const COLORS: { [key: string]: string } = {
	red: '#FF4949',
	blue: '#1E89EB',
	yellow: '#F4EB12',
	white: '#FFFFFF',
	green: '#00FF0A'

};

@Component({
	selector: 'app-controller-button',
	templateUrl: './controller-button.component.html',
	styleUrls: ['./controller-button.component.scss']
})
export class ControllerButtonComponent implements OnInit {
	@HostBinding('class.on') isOn = false;
	@Input() color = 'red';

	constructor() { }

	get colorCode(): string {
		return COLORS[this.color];
	}

	@HostListener('click')
	onClick() {
		this.isOn = !this.isOn;
	}

	ngOnInit(): void {
	}

}
