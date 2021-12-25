<?php

namespace App\Http\Controllers\Api\Maquinario;

use App\Http\Controllers\MasterApiController;
use App\Models\Maquinario\MarcaMaquina;

class MarcaMaquinaController extends MasterApiController
{
    public function __construct(MarcaMaquina $marca)
    {
        $this->models = $marca;
    }
}
