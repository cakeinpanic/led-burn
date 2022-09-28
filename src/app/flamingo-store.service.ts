import { Injectable } from '@angular/core';
import { Query, Store, StoreConfig } from '@datorama/akita';
import { Observable } from 'rxjs';
import { COLORS } from './enums';

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
	controller1$ = this.select('controller1');
	controller2$ = this.select('controller2');
	controller3$ = this.select('controller3');

	controller$(controllerIndex: number | string): Observable<Controller> {
		return (this as any)['controller' + controllerIndex + '$'] as Observable<Controller>
	}

	isColorOn(controllerIndex: number | string, color: COLORS): boolean {
		return !!((this.getValue() as any)['controller' + controllerIndex] as Controller).colors[color];
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
	constructor(private store: FlamingoStore) {

	}

	setColor(controllerIndex: number | string, color: COLORS, newColorState: boolean) {
		this.store.update(state => {
			const keyName = 'controller' + controllerIndex;
			const controllerState = (state as any)[keyName] as Controller;
			const newState = {
				...state,
				[keyName]: { ...controllerState, colors: { ...controllerState.colors, [color]: newColorState } } as Controller
			};
			console.log(newState);
			return newState;
		});
	}
}
