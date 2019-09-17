"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Electron Setup File
 * Main Thread
 */
var electron_1 = require("electron");
var path = require("path");
var url = require("url");
//the app window object
var mainWindow;
//enable dev tools
var openDevTools = false;
//display ready notification
var readyNotification = true;
var createWindow = function () {
    //create the window
    mainWindow = new electron_1.BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            webSecurity: false
        }
    });
    //load the angular entry point
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, "/../../dist/index.html"),
        protocol: "file:",
        slashes: true
    }));
    //open dev tools if enabled
    if (openDevTools)
        mainWindow.webContents.openDevTools();
    //display the ready notif if enabled
    if (readyNotification) {
        var notif = new electron_1.Notification({
            title: "App Ready !",
            body: "Your Angular Native app is ready ! Happy coding !"
        });
        notif.show();
    }
    //set closed event
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
};
/**
 * App Events
 */
electron_1.app.on('ready', createWindow);
electron_1.app.on('window-all-closed', function () {
    if (process.platform !== 'darwin')
        electron_1.app.quit();
});
electron_1.app.on('activate', function () {
    if (mainWindow === null)
        createWindow();
});
/**
 * IPC Events
 * From the Rendering Thread
 */
electron_1.ipcMain.on('notification', function (event, notifOptions) {
    var notif = new electron_1.Notification({
        title: notifOptions.title,
        body: notifOptions.body
    });
    notif.show();
});
//# sourceMappingURL=main.js.map