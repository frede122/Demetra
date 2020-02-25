<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Controllers\MasterApiController;
use App\Models\Debito as ModelsDebito;
use Illuminate\Http\Request;
use App\Models\Financeiro\Debito;
use App\Models\Financeiro\SubCategoria;

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
