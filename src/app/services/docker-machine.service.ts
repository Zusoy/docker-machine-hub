import { Injectable } from '@angular/core';
import { ChildProcessService } from 'ngx-childprocess';
import { Machine, MachineState } from 'src/types';

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

    public getMachineState(machineName: string): MachineState
    {
        const state: string = this.run(
            `docker-machine status ${machineName}`
        );

        return MachineState[state.toUpperCase().trim()];
    }

    public inspectMachine(machineName: string): Machine
    {
        const result: string = this.run(`docker-machine inspect ${machineName}`);
        let machine: Machine = JSON.parse(result);

        machine.State = this.getMachineState(machineName);
        machine.StateColor = machine.State === MachineState.RUNNING
            ? "primary"
            : "accent";

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