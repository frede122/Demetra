import { Model } from "../model";

export class MarcaMaquina extends Model {
    public nome: string

    constructor(nome: string){
        super();
        this.nome = nome;
    }
}