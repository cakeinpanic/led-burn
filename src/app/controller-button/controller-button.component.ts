import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
	styleUrls: ['./controller-button.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControllerButtonComponent implements OnInit {
	@Input() color: COLORS;
	@Input() controllerIndex: string;

	constructor(
		private flamingoService: FlamingoService,
		private flamingQuery: FlamingQuery,
		private cd: ChangeDetectorRef) { }

	get colorCode(): string {
		return COLOR_CODES[this.color];
	}

	@HostListener('click')
	onClick() {
		this.flamingoService.setColor(this.controllerIndex, this.color);
	}

	@HostBinding('class.on')
	get isColorOn$(): Observable<boolean> {
		return this.flamingQuery.isColorOn$(this.controllerIndex, this.color);
	}

	ngOnInit(): void {
		this.isColorOn$.subscribe(() => {
			this.cd.detectChanges();
		});
	}

}
