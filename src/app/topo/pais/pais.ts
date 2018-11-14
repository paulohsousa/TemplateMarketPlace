import { DataserviceService } from './dataservice.service';

export class Pais {

    constructor(
        public id:number,
        public sigla:string,
        public nome:string,
        public codISO:string
    ){}
}