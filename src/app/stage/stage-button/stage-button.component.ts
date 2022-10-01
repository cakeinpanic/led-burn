import { Component, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import { StageService } from '../../stage-store.service';

@Component({
	selector: 'app-stage-button',
	templateUrl: './stage-button.component.html',
	styleUrls: ['./stage-button.component.scss']
})
export class StageButtonComponent implements OnInit {
	@Input() name = 'Button';
	@Input() code: number;
	@HostBinding('class.on') @Input() on: boolean;

	constructor(private stageService: StageService) { }

	ngOnInit(): void {
	}

	@HostListener('click')
	onClick() {
		this.stageService.switchAppliance(this.code, !this.on)
	}

}
