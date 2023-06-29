import { AbstractEntity } from "./AbstractEntity";

export class ConfiguracaoModel extends AbstractEntity{
   valorHora!: number
   valorMultaMinuto! : number
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