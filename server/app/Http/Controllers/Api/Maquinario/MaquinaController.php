<?php

namespace App\Http\Controllers\Api\Maquinario;

use App\Http\Controllers\MasterApiController;
use App\Models\Maquinario\Maquina;

class MaquinaController extends MasterApiController
{
    public function __construct(Maquina $maquina)
    {
        $this->models = $maquina;
    }

    public function index(){
        if(!$data = Maquina::with('modeloMaquina')->get()){
            return response()->json(['error' => 'nada encontrado'], 404);
        }else{
            return response()->json($data);
        }
    }
}
