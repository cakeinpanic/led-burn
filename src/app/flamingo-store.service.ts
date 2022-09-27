import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface FlamingoState {

}

export function createInitialState(): FlamingoState {
	return {

	};
}

@StoreConfig({ name: "flamingo" })
@Injectable({ providedIn: "root" })
export class FlamingoStoreService extends Store<FlamingoState> {
	constructor() {
		super(createInitialState());
	}
}
