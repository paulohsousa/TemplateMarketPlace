import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ChartModule} from 'angular2-chartjs';
import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContatoComponent } from './contato/contato.component';
import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RelatoriosComponent } from './relatorios/relatorios.component';
@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    DashboardComponent,
    ContatoComponent,
    RelatoriosComponent
  ],
  imports: [
    BrowserModule,
    ChartModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
