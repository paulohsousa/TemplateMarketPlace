import { Component,OnDestroy ,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaginacaoService } from './paginacao.service';
import {Http,Response} from '@angular/http';
import {Subject} from 'rxjs';
 @Component({
  selector: 'app-relatorios',
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.sass']
})
export class RelatoriosComponent implements  OnInit  {
  
  dtOptions: DataTables.Settings = {};

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }
}
  //can be quite long,
  //
  //not implemented.");
 //  }
 //  ngOnInit(): void {
 //   
 //  }
 //
 // 
 // constructor(private http:Http){}
  
  //paginas:any []
  //id:number []
  //pagina:number
  //constructor(
  //  private route:ActivatedRoute,
  //  private router:Router,
  //  private paginacaoService:PaginacaoService

  //) { }

 
  //   this.paginas = this.paginacaoService.obterPaginas(); 
  //   if(this.paginas == this.id) {
  //    this.router.navigate(['/route',this.pagina]);
  //   }
  //    this.route.queryParams.subscribe(
  //  (queryParams:any)=> {
  //    this.pagina = queryParams ['pagina'];
  //  }
  //);
  

 
  
  
  
