<?php

namespace App\Models\Financeiro;

use Illuminate\Database\Eloquent\Model;

class ContaBanco extends Model
{
    protected $primaryKey = 'id';

    protected $fillable = [
        'titular',
        'cpf_cnpj',
        'ag',
        'conta',
        'conta_digito',
        'chave_pix',
        'tipo_chave',
        'banco_id'
    ];
}
