import { Injectable } from '@angular/core';
import { Query, Store, StoreConfig } from '@datorama/akita';
import { filter, map, Observable } from 'rxjs';
import { JavaService } from './java.service';
import { cloneDeep as _cloneDeep } from 'lodash';

const appliancesNames = [
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
	'Whatever',
	'Whatever2',
	'Whatever3',
	'Whatever4',
];

export interface ButtonState {
	name: string,
	code: number,
	on: boolean,
	icon: string,
	isEffect?: boolean
}

export interface StageStateState {
	appliances: ButtonState[];
}

export function createInitialState(): StageStateState {
	return {
		appliances: [
			...((new Array(8)).fill(0).map((t, i) => ({ code: i, name: appliancesNames[i], on: false, icon: 'flare' }))),
			{ code: 9, name: 'Smoke', on: false, icon: 'smoke', isEffect: true },
			{ code: 10, name: 'Flickers', on: false, icon: 'flickers', isEffect: true },
			{ code: 11, name: 'Bubble machine', on: false, icon: 'bubble', isEffect: true },
			{ code: 12, name: 'Flickers & fan', on: false, icon: 'fan', isEffect: true }],

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
	appliances$ = this.select('appliances').pipe(map(a => a.filter(({ isEffect }) => !isEffect)));
	effects$ = this.select('appliances').pipe(map(a => a.filter(({ isEffect }) => isEffect)));

	appliance(index: number): Observable<ButtonState> {
		return this.appliances$.pipe(map(arr => arr[index]));
	}
}

@Injectable({ providedIn: 'root' })
export class StageService {
	constructor(private store: StageStore, private javaService: JavaService) {

	}

	setNewApplianceCode({ name, newCode }: { name: string, newCode: number, oldCode?: number }) {
		this.store.update(state => {
			const newAppliances = _cloneDeep(state.appliances);
			const targetAppliance = newAppliances.find(({ name: aNAme }) => name == aNAme);
			// reset same codes for everything else
			newAppliances.filter(({ code }) => code == newCode).forEach(a => a.code = -1);

			if (targetAppliance) {
				targetAppliance.code = newCode;
			}
			return { ...state, appliances: newAppliances };
		});
	}

	switchAppliance(controllerCode: number, status: boolean) {
		this.javaService.sendToAndroid(`A${controllerCode}=${status ? 1 : 0}`);
	}

	setApplianceStatusFromSignal(applianceCode: number, status: string) {
		this.store.update(state => {
			const newAppliances = _cloneDeep(state.appliances);
			const targetAppliance = newAppliances.find(({ code }) => code == applianceCode);
			if (targetAppliance) {targetAppliance.on = status === '1';}
			return { ...state, appliances: newAppliances };
		});

	}
}

