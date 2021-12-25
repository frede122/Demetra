<?php

namespace App\Models\Financeiro;

use Illuminate\Database\Eloquent\Model;

class Banco extends Model
{
    protected $primaryKey = 'banco_id';

    protected $fillable = [
        'nome',
        'codigo'
    ];
}
