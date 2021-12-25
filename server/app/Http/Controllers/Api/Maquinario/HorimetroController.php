<?php

namespace App\Http\Controllers\Api\Maquinario;

use App\Http\Controllers\MasterApiController;
use App\Models\Maquinario\Horimetro;

use Illuminate\Http\Request;

class HorimetroController extends MasterApiController
{
    public function __construct(Horimetro $horimetro)
    {
        $this->models = $horimetro;
    }
}
