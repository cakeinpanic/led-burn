import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class JavaService {
	androidMessage = new Subject()
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
		this.androidMessage.next(s)
		this.sendToAndroid('Got from android' + s)
		alert(`Got from Android: ${s}`);
	}
}
