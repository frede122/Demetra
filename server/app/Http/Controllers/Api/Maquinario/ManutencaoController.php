<?php

namespace App\Http\Controllers\Api\Maquinario;

use App\Http\Controllers\MasterApiController;
use App\Models\Maquinario\Manutencao;

class ManutencaoController extends MasterApiController
{
    public function __construct(Manutencao $manutencao)
    {
        $this->models = $manutencao;
    }

    public function where($paramet){
        $data = $this->models->where('maquina_id', $paramet)->get();
        if(!$data){
            return response()->json(['Error' => 'Not Found'], 404);
        }
        return response()->json($data);
    }
}
