import { Injectable } from '@angular/core';
import { Query, Store, StoreConfig } from '@datorama/akita';
import { map, Observable } from 'rxjs';
import { COLORS, ORDERED_COLORS } from './enums';
import { JavaService } from './java.service';

export interface ControllerColors {
	[COLORS.RED]: number | boolean;
	[COLORS.BLUE]: number | boolean;
	[COLORS.GREEN]: number | boolean;
	[COLORS.YELLOW]: number | boolean;
	[COLORS.WHITE]: number | boolean;
}

export interface Controller {
	colors: ControllerColors,
	isOn: boolean
}

export interface FlamingoState {
	controller1: Controller;
	controller2: Controller;
	controller3: Controller;
}

export function createInitialState(): FlamingoState {
	const colorsState: ControllerColors = {
		red: false,
		blue: false,
		green: false,
		yellow: false,
		white: false,
	};
	return {
		controller1: { isOn: true, colors: { ...colorsState } },
		controller2: { isOn: true, colors: { ...colorsState } },
		controller3: { isOn: true, colors: { ...colorsState } },
	};
}

@Injectable({
	providedIn: 'root'
})
export class FlamingQuery extends Query<FlamingoState> {
	constructor(protected override store: FlamingoStore) {
		super(store);
	}

	all$ = this.select();


	controller$(controllerIndex: number | string): Observable<Controller> {
		return this.select('controller' + controllerIndex as any) as Observable<Controller>;
	}

	isColorOn$(controllerIndex: number | string, color: COLORS): Observable<boolean> {
		return this.controller$(controllerIndex).pipe(map(c => !!c.colors[color]));
	}
}

@StoreConfig({ name: 'flamingo' })
@Injectable({ providedIn: 'root' })
export class FlamingoStore extends Store<FlamingoState> {
	constructor() {
		super(createInitialState());
	}

}

@Injectable({ providedIn: 'root' })
export class FlamingoService {
	constructor(private store: FlamingoStore, private javaService: JavaService) {

	}

	setColor(controllerIndex: number | string, color: COLORS) {
		const keyName = 'controller' + controllerIndex;
		const controllerState = (this.store.getValue() as any)[keyName] as Controller;

		this.javaService.sendToAndroid(
			`P=${[
				controllerIndex,
				...ORDERED_COLORS.map(c => {
					const colorTooConvert = c === color ? !controllerState.colors[c] : controllerState.colors[c];
					return colorTooConvert ? 1 : 0;
				})
			].join('')}`);

	}

	setColorFromSignal(signal: string) {
		const controllerIndex = signal[0];
		const keyName = 'controller' + controllerIndex;
		const colors = {} as ControllerColors;
		ORDERED_COLORS.forEach((color, index) => {
			colors[color] = signal[index + 1] === '1';
		});

		this.store.update(state => {
			const controllerState = (this.store.getValue() as any)[keyName] as Controller;
			const newState = {
				...state,
				[keyName]: { ...controllerState, colors } as Controller
			};
			return newState;
		});
	}
}