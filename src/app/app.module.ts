// modules import
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxChildProcessModule } from 'ngx-childprocess';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';
import { MatMenuModule } from '@angular/material/menu';

// components import
import { AppComponent } from './app.component';
import { AppToolbarComponent } from './app-toolbar/app-toolbar.component';
import { MenuComponent } from './app-toolbar/menu/menu.component';
import { MachineCreatorComponent } from './machine-creator/machine-creator.component';
import { MachineInspectorComponent } from './machine-inspector/machine-inspector.component';
import { InspectDialogComponent } from './machine-inspector/inspect-dialog/inspect-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    AppToolbarComponent,
    MenuComponent,
    MachineCreatorComponent,
    MachineInspectorComponent,
    InspectDialogComponent
  ],
  imports: [
    BrowserModule,
    NgxChildProcessModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatTableModule,
    MatDialogModule,
    MatChipsModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
      InspectDialogComponent
  ]
})
export class AppModule
{
    
}
