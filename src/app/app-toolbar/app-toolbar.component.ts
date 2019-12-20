import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: "app-toolbar",
    templateUrl: "./app-toolbar.component.html",
    styleUrls: ["./app-toolbar.component.css"]
})
export class AppToolbarComponent
{
    @Output()
    private syncAction: EventEmitter<any> = new EventEmitter<any>();

    public syncAppMachines(): void
    {
        this.syncAction.emit(null);
    }
}