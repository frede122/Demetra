<?php

namespace App\Models\Pecuaria;

use Illuminate\Database\Eloquent\Model;

class Boletim extends Model
{
    protected $table = 'boletins';
    protected $primaryKey = 'boletins_id';
    protected $fillable = [
        'nome'
    ];
}
