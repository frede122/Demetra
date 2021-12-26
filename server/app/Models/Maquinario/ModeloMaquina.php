<?php

namespace App\Models\Maquinario;

use Illuminate\Database\Eloquent\Model;

class ModeloMaquina extends Model
{
    protected $primaryKey = 'modelo_maquina_id';

    protected $fillable = [
        'marca_maquina_id',
        'nome'
    ];
}
