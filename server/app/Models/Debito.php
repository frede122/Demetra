<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Debito extends Model
{
    protected $fillable = [
        'name', 'descricao'
    ];
    
    public function fornecedor(){
        return $this->hasOne(Fornecedor::class, 'id', 'fornecedor_id');
    }
    public function subCategoria(){
        return $this->hasOne(SubCategoria::class, 'id', 'sub_categoria_id', 'categoria_id');
    }
    public function doc(){
        return $this->hasOne(Doc::class, 'id', 'doc_id');
    }
    public function setor(){
        return $this->hasOne(Setor::class, 'id', 'setor_id');
    }
}
