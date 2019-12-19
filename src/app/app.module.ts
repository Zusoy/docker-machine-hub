import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxChildProcessModule } from 'ngx-childprocess';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MachineCreatorComponent } from './machine-creator/machine-creator.component';
import { MachineInspectorComponent } from './machine-inspector/machine-inspector.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MachineCreatorComponent,
    MachineInspectorComponent
  ],
  imports: [
    BrowserModule,
    NgxChildProcessModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule
{
    
}
