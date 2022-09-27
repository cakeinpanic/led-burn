import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface StageState {

}

export function createInitialState(): StageState {
	return {

	};
}

@StoreConfig({ name: "stage" })
@Injectable({ providedIn: "root" })
export class StageStoreService extends Store<StageState> {
	constructor() {
		super(createInitialState());
	}
}
