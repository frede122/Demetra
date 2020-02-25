<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Controllers\MasterApiController;
use App\Models\Financeiro\SubCategoria;
use Illuminate\Http\Request;

class SubCategoriaController extends MasterApiController
{
    protected $models;
    protected $request;
    public function __construct(SubCategoria $subCategoria, Request $request)
    {
        $this->models = $subCategoria;
        $this->request = $request;
    }
}
