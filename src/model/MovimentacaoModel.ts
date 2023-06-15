import { AbstractEntity } from "./AbstractEntity";
import { CondutorModel } from "./CondutorModel";
import { ConfiguracaoModel } from "./ConfiguracaoModel";
import {VeiculoModel} from "./VeiculoModel"

export class ModeloModel extends AbstractEntity{
    entrada! : Date
    saida! : Date
    tempoDesconto! : Date
    tempo! : Date
    tempoMulta! : Date
    veiculo! : VeiculoModel
    condutor! : CondutorModel
    configuracao! : ConfiguracaoModel
    valorMulta! : number
    valorTotal! : number
    valorHora! : number
    valorDesconto! : number

    constructor() {
        super()
        this.ativo = true
    }
}