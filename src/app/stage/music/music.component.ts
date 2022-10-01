import { Component, OnInit } from '@angular/core';
import { JavaService } from '../../services/java.service';

@Component({
	selector: 'app-music',
	templateUrl: './music.component.html',
	styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {

	constructor(private javaService: JavaService) { }

	ngOnInit(): void {

	}

	stop() {
		this.javaService.sendToAndroid('BB=S');
	}

	play() {
		this.javaService.sendToAndroid('BB=P');
	}

	next() {
		this.javaService.sendToAndroid('BB=N');
	}

	easter() {
		this.javaService.sendToAndroid('BB=E');
	}
}
