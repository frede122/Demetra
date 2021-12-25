<?php

namespace App\Http\Controllers\Api\Financeiro;

use App\Http\Controllers\MasterApiController;
use App\Models\Financeiro\Banco;

use Illuminate\Http\Request;

class BancoController extends MasterApiController
{
    public function __construct(Banco $banco)
    {
        $this->models = $banco;
    }
}
