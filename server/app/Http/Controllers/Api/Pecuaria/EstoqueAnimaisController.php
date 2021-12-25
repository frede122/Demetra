<?php

namespace App\Http\Controllers\Api\Pecuaria;

use App\Models\Pecuaria\EstoqueAnimais;
use App\Http\Controllers\MasterApiController;

use Illuminate\Http\Request;

class EstoqueAnimaisController extends MasterApiController
{
    public function __construct(EstoqueAnimais $estoqueanimais)
    {
        $this->models = $estoqueanimais;
    }
}
