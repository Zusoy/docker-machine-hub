/**
 * Electron Setup File
 * Main Thread
 */
import {
    app,
    BrowserWindow,
    Notification,
    NotificationConstructorOptions,
    ipcMain,
    IpcMainEvent,
    shell
} from 'electron';
import { MainThreadEvent } from './events';
import * as path from 'path';
import * as url from 'url';


//the app window object
let mainWindow: BrowserWindow;

//enable dev tools
const openDevTools: boolean = false;

const createWindow = () => 
{
    //create the window
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            webSecurity: false
        }
    });

    //load the angular entry point
    mainWindow.loadURL(
        url.format({
            pathname: path.join(__dirname, `/../../dist/index.html`),
            protocol: "file:",
            slashes: true
        })
    );

    //open dev tools if enabled
    if (openDevTools)
        mainWindow.webContents.openDevTools()
    
    //set closed event
    mainWindow.on('closed', () => {
        mainWindow = null
    });
}

/**
 * App Events
 */
app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
});

app.on('activate', () => {
    if (mainWindow === null) createWindow()
});


/**
 * IPC Events
 * From the Rendering Thread
 */
ipcMain.on(MainThreadEvent.Ping, (event: IpcMainEvent) => {
    console.log("Received an Ping from the Render Thread !");
    event.sender.send('pong');
});

ipcMain.on(MainThreadEvent.Notification, (event: IpcMainEvent, notifOptions: NotificationConstructorOptions) => {
    let notif:Notification = new Notification({
        title: notifOptions.title,
        body: notifOptions.body
    });

    notif.show();
});

ipcMain.on(MainThreadEvent.BrowserLink, (event: IpcMainEvent, link: string) => {
    shell.openExternal(link);
});