import {FormsModule} from '@angular/forms';
import { AppRoutes } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DataTablesModule} from 'angular-datatables';
import {ChartModule} from 'angular2-chartjs';
import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContatoComponent } from './contato/contato.component';
import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RelatoriosComponent } from './relatorios/relatorios.component';
import {PaginacaoService} from './relatorios/paginacao.service';

@NgModule({
  exports:[RouterModule],
  declarations: [
    AppComponent,
    TopoComponent,
    DashboardComponent,
    ContatoComponent,
    RelatoriosComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ChartModule,
    DataTablesModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [PaginacaoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
