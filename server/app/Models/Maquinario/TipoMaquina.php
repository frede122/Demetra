<?php

namespace App\Models\Maquinario;

use Illuminate\Database\Eloquent\Model;

class TipoMaquina extends Model
{
    protected $primaryKey = 'tipo_maquina_id';

    protected $fillable = [
        'nome'
    ];
}
