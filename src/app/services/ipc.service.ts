import { Injectable } from '@angular/core';
import { IpcRenderer } from 'electron';

/**
 * IPC Service
 * Help to communicate with the main electron thread via IPC.
 */
@Injectable({
    providedIn: 'root'
})
export class IpcService
{
    /**
     * IPC Renderer
     * used for communicate with the Main thread
     */
    private ipc: IpcRenderer | undefined;


    /**
     * IpcService Constructor
     */
    constructor() 
    {
        //call the electron 'require' injected method in window to get the ipcRenderer
        //because we can check the require method for null we are still compatible with the web.
        if (window.require){
            try{
                this.ipc = window.require('electron').ipcRenderer;
            } catch(e) {
                throw e;
            }
        } else {
            //not in native context
            console.warn("Could not load IPC Renderer");
        }
    }


    /**
     * Listen an Event from the Main Thread 
     */
    public on(channel: string, listener): void
    {
        if (!this.ipc)
            return;

        this.ipc.on(channel, listener);
    }


    /**
     * Listen one Time an Event from the Main Thread
     */
    public once(channel: string, listener): void
    {
        if (!this.ipc)
            return;
        
        this.ipc.once(channel, listener);
    }


    /**
     * Send an Event to the Main Thread
     */
    public send(channel: string, ...args): void
    {
        if (!this.ipc)
            return;
        
        console.log(`Send the ${channel} Event to the Main Thread...`);
        this.ipc.send(channel, ...args);
    }
}