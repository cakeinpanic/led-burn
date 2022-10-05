import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class JavaService {
	androidMessage = new Subject<string>();
	Android: any;

	constructor() {
		(window as any)['getFromAndroid'] = this.getFromAndroid.bind(this);
	}

	checkAndroid(): boolean {
		this.Android = (window as any)['Android'];
		return !!this.Android;
	}

	requestStatus() {
		this.sendToAndroid('status')
	}

	sendToAndroid(message: string) {
		console.log('sent to android: ', message);
		this.androidMessage.next(message);
		if (this.Android) {
			this.Android.sendMeEvent(message);
		}
	}

	getFromAndroid(s: string) {
		this.androidMessage.next(s);
		this.sendToAndroid('Got from android' + s);
	}
}
