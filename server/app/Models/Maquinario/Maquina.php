<?php

namespace App\Models\Maquinario;

use Illuminate\Database\Eloquent\Model;

class Maquina extends Model
{
    protected $primaryKey = 'maquina_id';

    protected $fillable = [
        'nome',
        'ano',
        'tipo',
        'modelo_maquina_id'
    ];
}
