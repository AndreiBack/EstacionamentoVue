import { AbstractEntity } from "./AbstractEntity";
import { Cor } from "./Cor";
import { ModeloModel } from "./ModeloModel";
import { Tipo } from "./Tipo";

export class VeiculoModel extends AbstractEntity{
    placa! : string
    modelo! : ModeloModel
    cor! : Cor
    tipo! : Tipo
    ano! : number
    constructor() {
        super()
        this.ativo = true
    }
}