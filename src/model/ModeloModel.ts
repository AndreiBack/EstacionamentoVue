import { AbstractEntity } from "./AbstractEntity";
import { MarcaModel } from "./MarcaModel";

export class ModeloModel extends AbstractEntity{
    nome! : string
    marcaId! : MarcaModel
    
    constructor() {
        super()
        this.ativo = true
    }
}