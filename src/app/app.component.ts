import { Component, OnInit } from '@angular/core';
import { Machine } from 'src/types';
import { DockerMachineService } from './services/docker-machine.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
    private machines: Machine[] = [];

    constructor(private docker: DockerMachineService) 
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

    private syncMachines(): void
    {
        this.machines = this.docker.inspectAllMachines();
    }
}
