import { Model } from "../model";

export class TipoMaquina extends Model {
    public tipo_maquina_id : number
    public nome: string;

    constructor(nome: string){
        super();
        this.nome = nome;
    }
}