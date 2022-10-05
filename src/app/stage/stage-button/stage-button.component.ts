import { Component, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import { StageService } from '../../services/stage-store.service';

@Component({
	selector: 'app-stage-button',
	templateUrl: './stage-button.component.html',
	styleUrls: ['./stage-button.component.scss']
})
export class StageButtonComponent implements OnInit {
	@Input() name = 'Button';
	@Input() code: number;
	@Input() icon: string;
	@HostBinding('class.on') @Input() on: boolean;

	constructor(private stageService: StageService) { }

	ngOnInit(): void {
	}


	get iconSrc():string{
		return 'assets/'+this.icon+'.svg'
	}
	@HostListener('click')
	onClick() {
		this.stageService.switchAppliance(this.code, !this.on)
	}

}
