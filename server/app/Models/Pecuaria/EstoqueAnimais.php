<?php

namespace App\Models\Pecuaria;

use Illuminate\Database\Eloquent\Model;

class EstoqueAnimais extends Model
{
    protected $table = 'estoque_animais';
    protected $primaryKey = 'estoque_animal_id';
    protected $fillable = [
        'mes_referencia',
        'ano_referencia',
        'animal_id',
        'quantidade'
    ];
}
