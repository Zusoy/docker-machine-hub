# Angular-Native

Personal repository to create angular app with Electron.

## How to use

``git clone https://github.com/Zusoy/angular-native.git``

Just clone the repository, and that's it !

## Services

### IpcService

The IpcService help you to send IPC (Inter-Process Communication) event in your app.
This service is Injectable from the root container.

Example for sending an event from the Render Process to the Main Process :

```typescript
// where ipc property is an injected IpcService instance
// send an "notification" event which create an native notification.
// the first parameter must be an event from the MainThreadEvent enum.
this.ipc.send(MainThreadEvent.Notification, {title: "Notif Title", body: "Notif Body"});
```