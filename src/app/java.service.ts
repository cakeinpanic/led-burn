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

	checkAndroid():boolean {
		this.Android = (window as any)['Android'];
		return !!this.Android;
	}

	sendToAndroid(message: string) {
		console.log('sent to android: ', message);
		if (this.Android) {
			this.Android.sendMeEvent(message);
		}
	}

	getFromAndroid(s: string) {
		this.androidMessage.next(s);
		this.sendToAndroid('Got from android' + s);
		//alert(`Got from Android: ${s}`);
	}
}
