import { AbstractEntity } from "./AbstractEntity";
import { CondutorModel } from "./CondutorModel";
import {VeiculoModel} from "./VeiculoModel"

export class ConfiguracaoModel extends AbstractEntity{
   valorHora!: number
    valorHoraMinuto! : number
    inicioExpediente! : Date
    fimExpediente! : Date
    tempoParaDesconto! : Date
    tempoDeDesconto! : Date
    gerarDesconto! : boolean
    vagasCarro! : number
    vagasMoto! : number 
    vagasVan! : number

    constructor() {
        super()
        this.ativo = true
    }
}