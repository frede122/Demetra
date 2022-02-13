<?php

namespace App\Models\Financeiro;

use Illuminate\Database\Eloquent\Model;

class Banco extends Model
{
    protected $primaryKey = 'id';

    protected $fillable = [
        'nome',
        'codigo'
    ];
}
