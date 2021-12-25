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
}
