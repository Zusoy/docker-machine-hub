import { Component, OnInit } from '@angular/core';
import { DockerMachineService } from '../services/docker-machine.service';
import { Machine } from 'src/types';

@Component({
  selector: 'app-machine-inspector',
  templateUrl: './machine-inspector.component.html',
  styleUrls: ['./machine-inspector.component.css']
})
export class MachineInspectorComponent implements OnInit
{
    private columns: string[] = ['name', 'state', 'ip', 'driver'];
    private machines: Machine[] = [];

    constructor (private docker: DockerMachineService) {}

    public ngOnInit(): void
    {
        this.syncMachines();
    }

    public syncMachines(): void
    {
        this.machines = this.docker.inspectAllMachines();
        console.log(this.machines);
    }
}
