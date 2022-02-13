<?php

namespace App\Models\Financeiro; 

use Illuminate\Database\Eloquent\Model;

class Categoria extends Model
{

    protected $primaryKey = 'id';

    protected $fillable = [
        'nome_categoria'
    ];
}
