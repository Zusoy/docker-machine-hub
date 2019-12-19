import { Injectable } from '@angular/core';
import { ChildProcessService } from 'ngx-childprocess';
import { Machine } from 'src/types';

@Injectable({
    providedIn: 'root'
})
export class DockerMachineService
{
    constructor (private mainProcess: ChildProcessService){}

    public getMachinesName(): string[]
    {
        const machines: string = this.run("docker-machine ls --format {{.Name}} ");
        return machines.split('\n')
            .map(machineName => machineName.trim())
            .filter(machine => machine.length > 0 && machine != null);
    }

    public getMachineState(machineName: string): string
    {
        const state: string = this.run(
            `docker-machine ls --filter name=${machineName} --format {{.State}}`
        );

        return state.toLowerCase().trim();
    }

    public inspectMachine(machineName: string): Machine
    {
        const result: string = this.run(`docker-machine inspect ${machineName}`);
        let machine: Machine = JSON.parse(result);

        machine.State = this.getMachineState(machineName);

        return machine;
    }

    public inspectAllMachines(): Machine[]
    {
        const machines: Machine[] = [];
        const machineNames = this.getMachinesName();

        machineNames.forEach(machineName => {
            machines.push(this.inspectMachine(machineName));
        });

        return machines;
    }

    private run(command: string, options: [] = []): string
    {
        const process = this.mainProcess.childProcess.execSync(
            command,
            options
        );

        return process.toString();
    }
}