import { NgModule } from '@angular/core';
import { AppModule } from './app.module';
import {RouterModule, Routes, } from '@angular/router';
import { RelatoriosComponent } from './relatorios/relatorios.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopoComponent } from './topo/topo.component';

//@NgModule({
//  exports:[
//    RouterModule
//  ],
//  imports: [
//    RouterModule.forRoot(AppRoutes)
//    
//  ],
//
//
//  
//})
export const AppRoutes : Routes  = [
  
  {
    path:'relatorios',
    component:RelatoriosComponent
  },
  
  {
        path: 'dashboard',
        component: DashboardComponent
  },

  
]