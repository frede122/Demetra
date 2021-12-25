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
}
