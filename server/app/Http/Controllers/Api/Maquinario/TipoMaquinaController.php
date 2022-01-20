<?php

namespace App\Http\Controllers\Api\Maquinario;

use App\Http\Controllers\MasterApiController;
use App\Models\Maquinario\TipoMaquina;

class TipoMaquinaController extends MasterApiController
{
    public function __construct(TipoMaquina $tipoMaquina)
    {
        $this->models = $tipoMaquina;
    }
}
