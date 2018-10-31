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
          '#F00','#0F0','#00F'

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
          '#F00',
          '#F00',
          '#F00',
          '#F00',
          '#F00',
          '#F00',
          '#F00'

        ]
      },
      {
        label:'Member Profit',
        data:[52,134,140,345,121,716,344],
        backgroundColor:[
          '#0F0',
          '#0F0',
          '#0F0',
          '#0F0',
          '#0F0',
          '#0F0',
          '#0F0'

        ]
      },
      {
        label:'Orders',
        data:[43,1434,440,98,540,431,644],
        backgroundColor:[
          '#00F',
          '#00F',
          '#00F',
          '#00F',
          '#00F',
          '#00F',
          '#00F'

        ]
      },
      {
        label:'Pending',
        data:[454,43,654,968,565,453,339],
        backgroundColor:[
          '#1E90FF',
          '#1E90FF',
          '#1E90FF',
          '#1E90FF',
          '#1E90FF',
          '#1E90FF',
          '#1E90FF'

        ]
      },
      {
        label:'Revenue',
        data:[1245,343,643,968,553,37,234],
        backgroundColor:[
          '#FFD700',
          '#FFD700',
          '#FFD700',
          '#FFD700',
          '#FFD700',
          '#FFD700',
          '#FFD700'

        ]
      }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

  

}
