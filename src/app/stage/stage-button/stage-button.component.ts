import { Component, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StageService } from '../../services/stage-store.service';
import { CodeDoalogComponent } from '../code-doalog/code-doalog.component';

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

	constructor(private stageService: StageService, private matDialog: MatDialog) { }

	ngOnInit(): void {
	}

	get iconSrc(): string {
		return 'assets/' + this.icon + '.svg';
	}

	editCode() {
		let dialogRef = this.matDialog.open(CodeDoalogComponent, {
			data: { code: this.code, name: this.name }
		});
		dialogRef.afterClosed().subscribe(newCode => {
			this.stageService.setNewApplianceCode({
				name: this.name,
				newCode
			});
		});
	}

	onClick() {
		this.stageService.switchAppliance(this.code, !this.on);
	}

}
