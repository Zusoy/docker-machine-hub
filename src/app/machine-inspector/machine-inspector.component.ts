import { Component, OnInit } from '@angular/core';
import { DockerMachineService } from '../services/docker-machine.service';

@Component({
  selector: 'app-machine-inspector',
  templateUrl: './machine-inspector.component.html',
  styleUrls: ['./machine-inspector.component.css']
})
export class MachineInspectorComponent implements OnInit
{
    private displayedColumns: string[] = ['name', 'ip', 'driver'];
    private machines: object[] = [];

    constructor (private docker: DockerMachineService) {}

    public ngOnInit(): void
    {
        this.machines = this.docker.inspectAllMachines();
        console.log(this.machines);
    }
}
