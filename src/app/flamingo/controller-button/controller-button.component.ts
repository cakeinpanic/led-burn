import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil, tap } from 'rxjs';
import { COLORS } from '../../services/enums';
import { FlamingoService, FlamingQuery } from '../../services/flamingo-store.service';

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
	@HostBinding('class.on') isColorOn: boolean = false;

	@Input() isControllerOn: boolean | null = true;
	destroy$ = new Subject<void>();

	constructor(
		private flamingoService: FlamingoService,
		private flamingQuery: FlamingQuery) { }

	get colorCode(): string {
		return COLOR_CODES[this.color];
	}

	@HostListener('click')
	onClick() {
		if (this.isControllerOn) {
			this.flamingoService.setColor(this.controllerIndex, this.color);
		}
	}

	ngOnInit(): void {
		this.flamingQuery.isColorOn$(this.controllerIndex, this.color)
			.pipe(takeUntil(this.destroy$)).subscribe(v => {this.isColorOn = !!this.isControllerOn && v;});

	}

	ngOnDestroy() {
		this.destroy$.next();
	}

}
