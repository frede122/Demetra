<?php

namespace App\Models\Financeiro; 

use Illuminate\Database\Eloquent\Model;

class Categoria extends Model
{

    protected $primaryKey = 'categorias_id';

    protected $fillable = [
        'nome'
    ];
}
