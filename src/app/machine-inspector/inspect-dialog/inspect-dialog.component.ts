import { Component, Inject } from '@angular/core';
import { Machine } from 'src/types';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface InspectDialogData {
    machine: Machine
}

@Component({
    selector: 'app-inspect-dialog',
    templateUrl: './inspect-dialog.component.html',
    styleUrls: ['./inspect-dialog.component.css']
})
export class InspectDialogComponent
{
    constructor(
        private dialogRef: MatDialogRef<InspectDialogComponent>,
        @Inject(MAT_DIALOG_DATA) private data: InspectDialogData
    ){}

    public closeModal(): void
    {
        this.dialogRef.close();
    }
}