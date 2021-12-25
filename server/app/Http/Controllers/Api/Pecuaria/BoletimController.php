<?php

namespace App\Http\Controllers\Api\Pecuaria;

use App\Http\Controllers\MasterApiController;
use App\Models\Pecuaria\Boletim;

use Illuminate\Http\Request;

class BoletimController extends MasterApiController
{
    public function __construct(Boletim $boletim)
    {
        $this->models = $boletim;
    }
}
