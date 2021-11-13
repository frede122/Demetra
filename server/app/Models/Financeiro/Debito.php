<?php

namespace App\Models\Financeiro;

use App\Models\Setor;  
use Illuminate\Database\Eloquent\Model;

class Debito extends Model
{
    protected $primaryKey = 'debito_id';

    protected $fillable = [
        'docs_id', 
        'fornecedor_id',
        'data',
        'descricao',
        'quantidade', 
        'valor_unitario', 
        'setor_id', 
        'sub_categoria_id'
    ];

    public function fornecedor(){
        return $this->hasOne(Fornecedor::class, 'fornecedor_id', 'fornecedor_id');
    }

    
    public function subCategoria(){
        return $this->hasOne(SubCategoria::class, 'sub_categoria_id', 'sub_categoria_id');
    }

    public function categoria(){
        return $this->hasOneThrough(Categoria::class,  SubCategoria::class, 'categoria_id', 'categoria_id', 'sub_categoria_id', 'sub_categoria_id');
    }

    public function doc(){
        return $this->hasOne(Doc::class, 'docs_id', 'docs_id');
    }

    public function setor(){
        return $this->hasOne(Setor::class, 'setor_id', 'setor_id');
    }
}
