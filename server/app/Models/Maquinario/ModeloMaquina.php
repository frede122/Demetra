<?php

namespace App\Models\Maquinario;

use Illuminate\Database\Eloquent\Model;

class ModeloMaquina extends Model
{
    protected $primaryKey = 'id';

    protected $fillable = [
        'marca_maquina_id',
        'nome'
    ];
}
