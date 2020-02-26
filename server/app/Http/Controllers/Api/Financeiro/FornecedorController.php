<?php

namespace App\Http\Controllers\Api\Financeiro;

use App\Http\Controllers\Controller;
use App\Http\Controllers\MasterApiController;
use App\Models\Financeiro\Fornecedor;
use Illuminate\Http\Request;

class FornecedorController extends MasterApiController
{
    protected $models;
    protected $request;
    public function __construct(Fornecedor $fornecedor, Request $request)
    {
        $this->models = $fornecedor;
        $this->request = $request;
    }

}
