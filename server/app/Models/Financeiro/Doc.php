<?php

namespace App\Models\Financeiro; 

use Illuminate\Database\Eloquent\Model;

class Doc extends Model
{
    protected $primaryKey = 'id';
    protected $fillable = [
        'documento',
        'mes_referencia',
        'ano_referencia'
    ];
}
