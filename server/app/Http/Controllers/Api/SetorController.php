<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Controllers\MasterApiController;
use App\Models\Setor;
use Illuminate\Http\Request;

class SetorController extends MasterApiController
{
    protected $models;
    protected $request;
    public function __construct(Setor $setor, Request $request)
    {
        $this->models = $setor;
        $this->request = $request;
    }
}
