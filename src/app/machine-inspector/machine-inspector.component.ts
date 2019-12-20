import { Component, OnInit } from '@angular/core';
import { DockerMachineService } from '../services/docker-machine.service';
import { MatDialog } from '@angular/material/dialog';
import { Machine } from 'src/types';
import { InspectDialogComponent } from './inspect-dialog/inspect-dialog.component';

@Component({
  selector: 'app-machine-inspector',
  templateUrl: './machine-inspector.component.html',
  styleUrls: ['./machine-inspector.component.css']
})
export class MachineInspectorComponent implements OnInit
{
    private columns: string[] = ['name', 'state', 'ip', 'driver', 'actions'];
    private machines: Machine[] = [];

    constructor (private docker: DockerMachineService, private dialog: MatDialog) {}

    public ngOnInit(): void
    {
        this.syncMachines();
    }

    public syncMachines(): void
    {
        this.machines = this.docker.inspectAllMachines();
    }

    public openInspectMachineDialog(machine: Machine): void
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
}
