import { DatePipe } from "@angular/common";
import { Model } from "../model";
import { ModeloMaquina } from "./modelo-maquina";

export class Maquina extends Model {
    public modelo_maquina_id : number;
    public nome: string;
    public ano: any;
    public tipo: any;
    public maquina_id: number;
    public modelo_maquina: ModeloMaquina

    // constructor(){
    //     super();
    // }

    constructor(
        modelo_maquina_id: number, 
        nome: string, 
        ano: Date, 
        tipo: string,
        id? : number
    ){
        
        super();
        this.modelo_maquina_id = modelo_maquina_id;
        this.nome = nome;
        this.ano = ano
        this.tipo = tipo
        this.id = id
    }

}