<?php

namespace App\Models\Maquinario;

use Illuminate\Database\Eloquent\Model;

class MarcaMaquina extends Model
{
    protected $primaryKey = 'marca_maquina_id';

    protected $fillable = [
        'nome'
    ];
}
