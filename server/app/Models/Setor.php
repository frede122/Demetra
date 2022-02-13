<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Setor extends Model
{
    protected $table = 'setores';
    protected $primaryKey = 'id';
    protected $fillable = [
        'nome',
        'endereco'
    ];
}
