<?php

namespace App\Http\Controllers\Api\Pecuaria;

use App\Models\Pecuaria\Animal;
use App\Http\Controllers\MasterApiController;

use Illuminate\Http\Request;

class AnimalController extends MasterApiController
{
    public function __construct(Animal $animal)
    {
        $this->models = $animal;
    }
}
