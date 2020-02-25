<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SubCategoria extends Model
{
    protected $primaryKey = 'sub_categorias_id';
    protected $fillable = [
        'nome',
        'categorias_id'
    ];
    
    public function categoria(){
        return SubCategoria::hasOne(Categoria::class, 'id', 'categoria_id');
    }

    public function debito(){
        return $this->hasOneThrough(SubCategoria::class, Categoria::class);
    }
}
