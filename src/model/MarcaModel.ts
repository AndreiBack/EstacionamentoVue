import { AbstractEntity } from "./AbstractEntity";

export class MarcaModel extends AbstractEntity{
    nome! : string

    constructor() {
        super()
        this.ativo = true
    }
}