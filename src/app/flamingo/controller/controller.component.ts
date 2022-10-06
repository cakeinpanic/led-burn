import { ChangeDetectorRef, Component, HostBinding, Input, OnInit } from '@angular/core';
import { map, Observable, pipe, startWith, tap } from 'rxjs';
import { COLORS } from '../../services/enums';
import { ControllerColors, FlamingoService, FlamingQuery } from '../../services/flamingo-store.service';

@Component({
	selector: 'app-controller',
	templateUrl: './controller.component.html',
	styleUrls: ['./controller.component.scss']
})
export class ControllerComponent implements OnInit {
	@Input() name = 'Controller 1';
	@Input() controllerIndex: string;

	isOn$: Observable<boolean>;
	colors: ControllerColors;
	COLORS = COLORS;

	constructor(private flamingQuery: FlamingQuery, private flamingoService: FlamingoService, private cd: ChangeDetectorRef) { }

	ngOnInit(): void {
		this.isOn$ = this.flamingQuery.controller$(this.controllerIndex)
			.pipe(map(c => c.isOn), tap(t=>{
				console.log('isOn', t, 'c', this.controllerIndex);
			}));
	}

	toggleController() {
		this.flamingoService.toggleController(this.controllerIndex)
	}

}
