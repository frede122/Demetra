<?php

namespace App\Http\Controllers\Api\Pecuaria;

use App\Http\Controllers\Controller;
use App\Http\Controllers\MasterApiController;
use App\Models\Pecuaria\Boletim;
use Illuminate\Http\Request;

class BoletimController extends MasterApiController
{
    protected $models;
    protected $request;
    public function __construct(Boletim $boletim, Request $request)
    {
        $this->models = $boletim;
        $this->request = $request;
    }
}
