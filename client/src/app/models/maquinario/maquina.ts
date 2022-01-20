import { DatePipe } from "@angular/common";
import { Model } from "../model";

export class Maquina extends Model {
    public modelo_maquina_id : number;
    public nome: string;
    public ano: any;
    public tipo: any;
    public maquina_id: number;


    // constructor(){
    //     super();
    // }

    constructor(
        modelo_maquina_id: number, 
        nome: string, 
        ano: Date, 
        tipo: string
    ){
        
        super();
        this.modelo_maquina_id = modelo_maquina_id;
        this.nome = nome;
        this.ano = ano
        this.tipo = tipo
    }

}