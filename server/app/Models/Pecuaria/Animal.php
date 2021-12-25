<?php

namespace App\Models\Pecuaria;

use Illuminate\Database\Eloquent\Model;

class Animal extends Model
{
    protected $table = 'animais';
    protected $primaryKey = 'aminal_id';
    protected $fillable = [
        'nome',
        'raca',
        'especie',
        'idade',
        'genero'
    ];
}
