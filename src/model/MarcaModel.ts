import { AbstractEntity } from "./AbstractEntity";

export class MarcaModel extends AbstractEntity{
    
    nome! : String
    
    constructor() {
        super()
        this.ativo = true
    }
}