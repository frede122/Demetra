<?php

namespace App\Http\Controllers\Api\Financeiro;

use App\Http\Controllers\Controller;
use App\Http\Controllers\MasterApiController;
use App\Models\Financeiro\Doc;
use Illuminate\Http\Request;

class DocController extends MasterApiController
{
    protected $models;
    protected $request;
    public function __construct(Doc $doc, Request $request)
    {
        // $this->middleware('jwt.auth');
        // Restringe uma controller inteira com jwt independente da rota
        
        $this->models = $doc;
        $this->request = $request;
    }
}
