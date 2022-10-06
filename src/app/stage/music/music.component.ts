import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { JavaService } from '../../services/java.service';

@Component({
	selector: 'app-music',
	templateUrl: './music.component.html',
	styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {
@Input() fullMode: boolean
	constructor(private javaService: JavaService) { }
@Output() backToStage = new EventEmitter()
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
