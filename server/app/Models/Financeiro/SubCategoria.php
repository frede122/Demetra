<?php

namespace App\Models\Financeiro; 

use Illuminate\Database\Eloquent\Model;

class SubCategoria extends Model
{
    protected $primaryKey = 'sub_categoria_id';
    protected $fillable = [
        'nome',
        'categoria_id'
    ];
    
    public function categoria(){
        return SubCategoria::hasOne(Categoria::class, 'id', 'categoria_id');
    }

    public function debito(){
        return $this->hasOneThrough(SubCategoria::class, Categoria::class);
    }
}
