import { Component, OnInit } from '@angular/core';
import { Machine } from 'src/types';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DockerMachineService } from './services/docker-machine.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
    private machines: Machine[] = [];
    private isLoading: boolean = false;

    constructor(private docker: DockerMachineService, private snackBar: MatSnackBar)
    {

    }

    public ngOnInit(): void
    {
        this.syncMachines();
    }

    public onSyncAction(event: any): void
    {
        this.syncMachines();
    }

    public onStopMachine(event: Machine): void
    {
        this.isLoading = true;
        
        this.docker.asyncStopMachine(event).then(stdout => {
            this.snackBar.open(stdout, event.Name, {duration: 5000});
            this.syncMachines();
            this.isLoading = false;
        });
    }

    private syncMachines(): void
    {
        this.machines = this.docker.inspectAllMachines();
    }
}
