import { AbstractEntity } from "./AbstractEntity";
import { MarcaModel } from "./MarcaModel";

export class ModeloModel extends AbstractEntity{
    modelo! : string
    marcaId! : MarcaModel
    
    constructor() {
        super()
        this.ativo = true
    }
}