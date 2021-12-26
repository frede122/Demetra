<?php

namespace App\Models\Maquinario;

use Illuminate\Database\Eloquent\Model;

class Horimetro extends Model
{
    protected $primaryKey = 'horimetro_id';

    protected $fillable = [
        'maquina_id',
        'hora_inicio',
        'hora_fim',
        'valor_hora',
        'descricao'
    ];
}
