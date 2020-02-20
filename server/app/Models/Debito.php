<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Debito extends Model
{
    protected $fillable = [
        'name', 'descricao'
    ];
    
    public function fornecedor(){
        return $this->hasMany(Fornecedor::class, 'id', 'fornecedor_id');
    }
}
