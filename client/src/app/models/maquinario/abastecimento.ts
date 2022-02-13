import { DatePipe, Time } from "@angular/common";
import { MatDateFormats } from "@angular/material";
import { MaquinarioModule } from "src/app/maquinario/maquinario.module";
import { Model } from "../model";
import { Maquina } from "./Maquina";


export class Abastecimento extends Model{
    maquina: Maquina;
    maquina_id: number;
    litros: number;
    data: string;
    hora: Time;
    horimetro: number;

    constructor(
        maquina_id: number,
        litros: number,
        data: string,
        hora: Time,
        horimetro:number
    ){
        super();
        this.maquina_id = maquina_id;
        this.litros = litros;
        this.data = data;
        this.hora = hora
        this.horimetro = horimetro
    }


}