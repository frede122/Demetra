<?php

namespace App\Http\Controllers\Api\Maquinario;

use App\Http\Controllers\MasterApiController;
use App\Models\Maquinario\ModeloMaquina;

class ModeloMaquinaController extends MasterApiController
{
    public function __construct(ModeloMaquina $modeloMaquina)
    {
        $this->models = $modeloMaquina;
    }
}
