<?php

namespace App\Http\Controllers\Api\Financeiro;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Controllers\MasterApiController;
use App\Models\Financeiro\Debito;

class DebitoController extends MasterApiController
{
    protected $models;
    protected $request;
    public function __construct(Debito $debito, Request $request)
    {
        $this->models = $debito;
        $this->request = $request;
    }

    public function index(){
        if(!$data = Debito::with('doc', 'fornecedor', 'categoria', 'subCategoria', 'setor')->get()){
            return response()->json(['error' => 'nada encontrado'], 404);
        }else{
            return response()->json($data);
        }
           

    }
}
