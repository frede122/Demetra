<?php

namespace App\Models\Financeiro; 

use Illuminate\Database\Eloquent\Model;

class Categoria extends Model
{

    protected $primaryKey = 'categoria_id';

    protected $fillable = [
        'nome'
    ];
}
