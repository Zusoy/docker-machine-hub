import { Injectable } from '@angular/core';
import { ChildProcessService } from 'ngx-childprocess';

@Injectable({
    providedIn: 'root'
})
export class DockerMachineService
{
    constructor (private mainProcess: ChildProcessService){}

    public getMachinesName(): string[]
    {
        let machines = this.run("docker-machine ls --format {{.Name}} ");
        return machines.split('\n')
            .map(machineName => machineName.trim())
            .filter(machine => machine.length > 0 && machine != null);
    } 

    public inspectMachine(name: string): object
    {
        let machine = this.run(`docker-machine inspect ${name}`);
        return JSON.parse(machine);
    }

    public inspectAllMachines(): object[]
    {
        let machines = [];
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