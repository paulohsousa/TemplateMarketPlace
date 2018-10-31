import { ContatoComponent } from './../contato/contato.component';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.sass']
})
export class TopoComponent implements OnInit {

  
 // toastrChama(){
  //  this.toastr.success(`<app-contato></app-contato>`+ ContatoComponent); 
    
 // }
  
  constructor(private toastr:ToastrService) { }
  
  ngOnInit() {

  }
  
}
