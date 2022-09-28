import { Component, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import { COLORS } from '../enums';
import { FlamingoService, FlamingQuery } from '../flamingo-store.service';

const COLOR_CODES: { [key: string]: string } = {
	[COLORS.RED]: '#FF4949',
	[COLORS.BLUE]: '#1E89EB',
	[COLORS.YELLOW]: '#F4EB12',
	[COLORS.WHITE]: '#FFFFFF',
	[COLORS.GREEN]: '#00FF0A'
};

@Component({
	selector: 'app-controller-button',
	templateUrl: './controller-button.component.html',
	styleUrls: ['./controller-button.component.scss']
})
export class ControllerButtonComponent implements OnInit {
	@Input() color: COLORS;
	@Input() controllerIndex: string;

	constructor(private flamingoService: FlamingoService,
				private flamingQuery: FlamingQuery) { }

	get colorCode(): string {
		return COLOR_CODES[this.color];
	}

	@HostListener('click')
	onClick() {
		this.flamingoService.setColor(this.controllerIndex, this.color, !this.isColorOn);
	}

	@HostBinding('class.on')
	get isColorOn(): boolean {
		return this.flamingQuery.isColorOn(this.controllerIndex, this.color);
	}

	ngOnInit(): void {
	}

}
