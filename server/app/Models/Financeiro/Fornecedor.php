<?php

namespace App\Models\Financeiro; 

use Illuminate\Database\Eloquent\Model;

class Fornecedor extends Model
{
    protected $table = 'fornecedores';
    protected $primaryKey = 'id';
    protected $fillable = [
        'nome',
        'cpf_cnpj', 
        'endereco'
    ];
}
