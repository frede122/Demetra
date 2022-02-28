import { Time } from "@angular/common";
import { Model } from "../model";
import { Maquina } from "./Maquina";


export class Manutencao extends Model{
    maquina: Maquina;
    maquina_id: number;
    descricao: string;
    data: string;
    horimetro: number;
    valor: number;

    constructor(
        maquina_id: number,
        descricao: string,
        data: string,
        horimetro:number,
        valor: number
    ){
        super();
        this.maquina_id = maquina_id;
        this.descricao = descricao;
        this.data = data;
        this.horimetro = horimetro;
        this.valor = valor
    }


}