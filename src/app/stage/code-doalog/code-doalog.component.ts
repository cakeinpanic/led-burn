import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
	selector: 'app-code-doalog',
	templateUrl: './code-doalog.component.html',
	styleUrls: ['./code-doalog.component.scss']
})
export class CodeDoalogComponent implements OnInit {
	code = new FormControl(0, [Validators.max(12), Validators.min(0)]);

	constructor(
		public dialogRef: MatDialogRef<CodeDoalogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any) { }

	ngOnInit(): void {
		this.code.setValue(this.data.code);
	}

	close() {
		this.dialogRef.close(+(this.code.value || ''))
	}

}
