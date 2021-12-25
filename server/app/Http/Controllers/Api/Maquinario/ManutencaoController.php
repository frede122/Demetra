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
}
