import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface StageState {
	buttons: { name: string, code: string }[];
}

export function createInitialState(): StageState {
	return {
		buttons: []
	};
}

@StoreConfig({ name: 'stage' })
@Injectable({ providedIn: 'root' })
export class StageStoreService extends Store<StageState> {
	constructor() {
		super(createInitialState());
	}
}
