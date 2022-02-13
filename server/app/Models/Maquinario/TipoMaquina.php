<?php

namespace App\Models\Maquinario;

use Illuminate\Database\Eloquent\Model;

class TipoMaquina extends Model
{
    protected $primaryKey = 'id';

    protected $fillable = [
        'nome'
    ];
}
