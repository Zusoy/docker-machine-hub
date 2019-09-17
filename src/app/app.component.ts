import { Component } from '@angular/core';
import { IpcService } from './services/ipc.service';
import { NotificationConstructorOptions } from 'electron';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
    constructor(private ipc: IpcService){ }


    /**
     * Display Native Notification
     */
    public nativeNotification(): void
    {
        const notifOptions: NotificationConstructorOptions = {
            title: "Hello World !",
            body: "Waow ! an native notification !"
        }

        //send an notification event to the Main Thread
        this.ipc.send('notification', notifOptions);
    }
}
