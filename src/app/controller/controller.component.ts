import { Component, Input, OnInit } from '@angular/core';
import { map, Observable, startWith } from 'rxjs';
import { COLORS } from '../enums';
import { ControllerColors, FlamingQuery } from '../flamingo-store.service';

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

	constructor(private flamingQuery: FlamingQuery) { }

	ngOnInit(): void {
		this.isOn$ = this.flamingQuery.controller$(this.controllerIndex).pipe(map(c => !!c.isOn),startWith(false));
	}

}
