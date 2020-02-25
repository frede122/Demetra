<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Controllers\MasterApiController;
use App\Models\Financeiro\Categoria;
use Illuminate\Http\Request;

class CategoriaController extends MasterApiController {
    protected $models;
    protected $request;
    public function __construct(Categoria $categoria, Request $request)
    {
        $this->models = $categoria;
        $this->request = $request;
    }
}
