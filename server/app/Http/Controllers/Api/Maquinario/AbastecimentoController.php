<?php

namespace App\Http\Controllers\Api\Maquinario;

use App\Http\Controllers\MasterApiController;
use App\Models\Maquinario\Abastecimento;

class AbastecimentoController extends MasterApiController
{
    public function __construct(Abastecimento $abastecimento)
    {
        $this->models = $abastecimento;
    }

    public function index(){
        if(!$data = Abastecimento::join('maquinas', 'maquinas.id', '=', 'maquina_id')
        ->select(
            'abastecimentos.id as id', 
            'maquinas.nome AS maquina', 
            'maquina_id',
            'litros',
            'data',
            'hora',
            'horimetro'
        )->get()){
            return response()->json(['error' => 'nada encontrado'], 404);
        }else{
            return response()->json($data);
        }
    }
}
