<?php

namespace App\Http\Controllers\Api\Financeiro;

use App\Http\Controllers\MasterApiController;
use App\Models\Financeiro\ContaBanco;

use Illuminate\Http\Request;

class ContaBancoController extends MasterApiController
{
    public function __construct(ContaBanco $contaBanco)
    {
        $this->models = $contaBanco;
    }
}
