import { Component, Input, OnInit } from '@angular/core';
import { StageStoreService } from '../../stage-store.service';

@Component({
	selector: 'app-stage-button',
	templateUrl: './stage-button.component.html',
	styleUrls: ['./stage-button.component.scss']
})
export class StageButtonComponent implements OnInit {
	@Input() name = 'Button';
	@Input() code: string

	constructor(private stage: StageStoreService) { }

	ngOnInit(): void {
	}

}
