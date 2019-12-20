import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Machine } from 'src/types';
import { InspectDialogComponent } from './inspect-dialog/inspect-dialog.component';
import { IpcService } from '../services/electron/ipc.service';
import { MainThreadEvent } from 'electron/events';

@Component({
  selector: 'app-machine-inspector',
  templateUrl: './machine-inspector.component.html',
  styleUrls: ['./machine-inspector.component.css']
})
export class MachineInspectorComponent
{
    @Input()
    private machines: Machine[] = [];
    private columns: string[] = ['name', 'state', 'ip', 'driver', 'actions'];

    constructor (private dialog: MatDialog, private ipc: IpcService) {}

    private openInspectMachineDialog(machine: Machine): void
    {
        const dialogRef = this.dialog.open(InspectDialogComponent, {
            width: '700px',
            height: '500px',
            data: {machine: machine}
        });

        dialogRef.afterClosed().subscribe(data => {
            console.log('The inspect dialog is closed');
        });
    }

    private openMachineLocalhost(machine: Machine): void
    {
        const link = `http://${machine.Driver.IPAddress}`;
        this.ipc.send(MainThreadEvent.BrowserLink, link);
    }
}
