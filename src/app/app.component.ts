import { Component } from '@angular/core';
import { IpcService } from './services/electron/ipc.service';
import { IpcRendererEvent } from 'electron';
import { MainThreadEvent } from 'electron/events';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
    constructor(private ipc: IpcService){ }


    public sendPing(): void
    {
        this.ipc.once('pong', (event: IpcRendererEvent) => {
            console.log('pong from the Main Thread !');
        });

        this.ipc.send(MainThreadEvent.Ping);
    }
}
