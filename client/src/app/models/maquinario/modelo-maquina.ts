import { Model } from "../model";

export class ModeloMaquina extends Model {
    public marca_maquina_id: number;
    public nome: string;

    constructor(nome: string, marca_maquina_id: number){
        super();
        this.nome = nome;
        this.marca_maquina_id = marca_maquina_id
    }
}