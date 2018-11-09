import { RelatoriosComponent } from './relatorios.component';
import { Injectable } from '@angular/core';

@Injectable()
export class PaginacaoService {

    obterPaginas() {
        return [
            {id: 1 },
            {id: 2 },
            {id: 3 }
        ]
    }
    obterPagina(id: number) {
        let paginas = this.obterPaginas();
        for(let i=0; i<paginas.length; i++){
            let pagina = paginas [i];
            if(pagina.id == id) {
                return pagina;
                
            }
        }
        return null
    }

    constructor(){}

}