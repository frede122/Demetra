<?php

namespace App\Models\Financeiro; 
use App\Models\Setor;    

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Debito extends Model
{

    public function __construct()
    {
        
    }

    protected $primaryKey = 'debitos_id';

    protected $fillable = [
        'name', 'descricao'
    ];
    
    public function fornecedor(){
        return $this->hasOne(Fornecedor::class, 'fornecedores_id', 'fornecedores_id');
    }

    
    public function subCategoria(){
        return $this->hasOne(SubCategoria::class, 'sub_categorias_id', 'sub_categorias_id');
    }

    public function categoria(){
        return $this->hasOneThrough(Categoria::class,  SubCategoria::class, 'categorias_id', 'categorias_id', 'sub_categorias_id', 'sub_categorias_id');
    }

    public function doc(){
        return $this->hasOne(Doc::class, 'docs_id', 'docs_id');
    }
    public function setor(){
        return $this->hasOne(Setor::class, 'setores_id', 'setores_id');
    }
}
