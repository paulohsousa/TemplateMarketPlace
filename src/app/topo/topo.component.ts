import { ContatoComponent } from './../contato/contato.component';
import { Component, OnInit } from '@angular/core';
import { DataserviceService } from './pais/dataservice.service';
import { Pais } from './pais/pais';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.sass'],
  providers:[DataserviceService]
})
export class TopoComponent implements OnInit {
  paisSelecionado : Pais = new Pais(1,'','','') ;
  paises:Pais [];
  
  constructor(
    private dataService:DataserviceService
  )
   {
     this.paises = this.dataService.obterPaises();
    }
    onSelect(id) {
      this.paises = this.dataService.obterPaises().filter((item)=> item == id);
      return this.paisSelecionado
    }
  
  
  ngOnInit() {

  }
  
}
