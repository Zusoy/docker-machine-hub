/**
 * Electron Setup File
 */
const { app, BrowserWindow } = require('electron');
const url = require("url");
const path = require("path");

//the app window object
let mainWindow;

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
            pathname: path.join(__dirname, `/dist/index.html`),
            protocol: "file:",
            slashes: true
        })
    );

    //uncomment below to open the DevTools
    //mainWindow.webContents.openDevTools()
    mainWindow.on('closed', () => {
        mainWindow = null
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
    if (mainWindow === null) createWindow()
})