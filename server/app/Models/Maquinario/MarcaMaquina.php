<?php

namespace App\Models\Maquinario;

use Illuminate\Database\Eloquent\Model;

class MarcaMaquina extends Model
{
    protected $primaryKey = 'id';

    protected $fillable = [
        'nome'
    ];
}
