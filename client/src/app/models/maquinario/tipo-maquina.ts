import { Model } from "../model";

export class TipoMaquina extends Model {
    
    public nome: string;

    constructor(nome: string){
        super();
        this.nome = nome;
    }
}