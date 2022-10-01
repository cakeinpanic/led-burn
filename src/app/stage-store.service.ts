import { Injectable } from '@angular/core';
import { Query, Store, StoreConfig } from '@datorama/akita';
import { map, Observable } from 'rxjs';
import { JavaService } from './java.service';
import {cloneDeep as _cloneDeep} from 'lodash'
const names = [
	'Rainbow',
	'Easter',
	'Stage off',
	'Runway',
	'More',
	'Color',
	'Light1',
	'Light2',
	'Garland1',
	'Garland2',
];

export interface ButtonState {
	name: string,
	code: number,
	on: boolean
}

export interface StageStateState {
	appliances: ButtonState[];
}

export function createInitialState(): StageStateState {
	return {
		appliances: (new Array(8)).fill(0).map((t, i) => ({ code: i, name: names[i], on: false }))
	};
}

@StoreConfig({ name: 'stage' })
@Injectable({ providedIn: 'root' })
export class StageStore extends Store<StageStateState> {
	constructor() {
		super(createInitialState());
	}
}

@Injectable({
	providedIn: 'root'
})
export class StageQuery extends Query<StageStateState> {
	constructor(protected override store: StageStore) {
		super(store);
	}

	all$ = this.select();
	appliances$ = this.select('appliances');

	appliance(index: number): Observable<ButtonState> {
		return this.appliances$.pipe(map(arr => arr[index]));
	}
}

@Injectable({ providedIn: 'root' })
export class StageService {
	constructor(private store: StageStore, private javaService: JavaService) {

	}

	switchAppliance(controllerIndex: number, status: boolean) {
		this.javaService.sendToAndroid(`A${controllerIndex}=${status ? 1 : 0}`);
	}

	setApplianceStatusFromSignal(applianceIndex: number, status: string) {
		this.store.update(state => {

			const newAppliances = _cloneDeep(state.appliances)
			newAppliances[applianceIndex].on = status === '1';
			return {...state, appliances: newAppliances};
		});

	}
}

