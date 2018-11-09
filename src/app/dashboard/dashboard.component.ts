import { Component, OnInit } from '@angular/core';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  options = {
    responsive:true,
    maintainAspectRatio:false
  };
  //public corAle(){
  //  var hexadecimais : [ '0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
  //  var cor :'#';
  //  for(var i=0;i<6; i++) {
  //    cor+=hexadecimais [Math.floor(Math.random()*16)];
  //  
  //  }
  //  return  cor;
  //}
  public corAle() {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return "rgb(" + r + "," + g + "," + b + ")";
  };


  type = "doughnut";
  registrosGrafico = {
    //Título do gráfico
    labels:[
      'Vendas',
      'Campanha Abertas',
      'Não resgistrado'
    ],
    datasets:[
      {
        label:'vendas',
        data:[50,15,10],
        backgroundColor:[
         // '#F00','#0F0','#00F',
         this.corAle(),
         this.corAle(),
         this.corAle()
        ]
      }
    ]
  };
  type2 = "line";
  registrosGrafico2 = {
    //Título do gráfico
    labels:[
      'Janeiro',
      'Fevereiro',
        "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho"
    ],
    datasets:[
      {
        label:'Tasks',
        data:[50,15,10,45,21,76,34],
        backgroundColor:[
         
          this.corAle(),
        ]
      },
      {
        label:'Member Profit',
        data:[52,134,140,345,121,716,344],
        backgroundColor:[
          
          this.corAle(),

        ]
      },
      {
        label:'Orders',
        data:[43,1434,440,98,540,431,644],
        backgroundColor:[
          this.corAle()

        ]
      },
      {
        label:'Pending',
        data:[454,43,654,968,565,453,339],
        backgroundColor:[
          this.corAle(),

        ]
      },
      {
        label:'Revenue',
        data:[1245,343,643,968,553,37,234],
        backgroundColor:[
          this.corAle(),

        ]
      }
    ]
  };
 
  constructor() { 
    
  }

  ngOnInit() {
  }

  

}

