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

    protected $primaryKey = 'debito_id';

    protected $fillable = [
        'name', 'descricao'
    ];
    
    public function fornecedor(){
        return $this->hasOne(Fornecedor::class, 'fornecedor_id', 'fornecedor_id');
    }

    
    public function subCategoria(){
        return $this->hasOne(SubCategoria::class, 'sub_categori_id', 'sub_categoria_id');
    }

    public function categoria(){
        return $this->hasOneThrough(Categoria::class,  SubCategoria::class, 'categori_id', 'categori_id', 'sub_categori_id', 'sub_categorias_id');
    }

    public function doc(){
        return $this->hasOne(Doc::class, 'doc_id', 'doc_id');
    }
    public function setor(){
        return $this->hasOne(Setor::class, 'setor_id', 'setor_id');
    }
}
