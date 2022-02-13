<?php

namespace App\Models\Maquinario;

use Illuminate\Database\Eloquent\Model;

class Manutencao extends Model
{
    protected $primaryKey = 'id';
    protected $table = 'manutencoes';
    protected $fillable = [
        'maquina_id',
        'data',
        'valor',
        'descricao'
    ];
}
