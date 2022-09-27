import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class JavaService {

	constructor() {
		(window as any)['getFromAndroid'] = this.getFromAndroid.bind(this);
	}

	sendToAndroid(message: string) {
		const Android = (window as any)['Android'];
		if (Android) {
			Android.sendMeEvent(message);
		} else {
			throw new Error()
		}
	}

	getFromAndroid(s: string) {
		alert(`Got from Android: ${s}`);
	}
}
