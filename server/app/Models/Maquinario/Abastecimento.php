<?php

namespace App\Models\Maquinario;

use Illuminate\Database\Eloquent\Model;

class Abastecimento extends Model
{
    protected $primaryKey = 'horimetro_id';

    protected $fillable = [
        'maquina_id',
        'litros',
        'data',
        'hora',
        'horimetro'
    ];
}
