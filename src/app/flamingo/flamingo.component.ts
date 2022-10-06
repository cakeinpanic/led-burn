
import { Component, OnInit } from '@angular/core';
import { FlamingoService, FlamingQuery } from '../services/flamingo-store.service';

@Component({
	selector: 'app-flamingo',
	templateUrl: './flamingo.component.html',
	styleUrls: ['./flamingo.component.scss']
})
export class FlamingoComponent implements OnInit {
	flamingo$ = this.flamingQuery.flamingo$;

	constructor(private flamingQuery: FlamingQuery, private flamingoService: FlamingoService) { }

	ngOnInit(): void {
	}
	toggleFlamingo(){
		this.flamingoService.toggleFlamingo()
	}
}
