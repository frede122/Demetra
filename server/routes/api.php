<?php

Route::post('login', 'Auth\AuthController@login');
Route::post('refresh', 'Auth\AuthController@refresh');
Route::post('me', 'Auth\AuthController@me');

Route::group([
    'namespace' => 'Api'
    ], function ($router){
        Route::apiResource('setor', 'SetorController')->middleware('jwt.auth');
        // Restringindo uma unica rota com jwt

        Route::group(['namespace' => 'Financeiro', 'middleware' => 'jwt.auth'], function () {
            // Restringindo um grupo de rotas com jwt

            Route::apiResource('debito', 'DebitoController');
            Route::apiResource('doc', 'DocController');
            Route::apiResource('fornecedor', 'FornecedorController');
            Route::apiResource('categoria', 'CategoriaController');
            Route::apiResource('sub-categoria', 'SubCategoriaController');
        });

        Route::group(['namespace' => 'Maquinario', 'middleware' => 'jwt.auth'], function () {
            // Restringindo um grupo de rotas com jwt

            Route::apiResource('abastecimento', 'AbastecimentoController');
            Route::apiResource('manutencao', 'ManutencaoController');
            Route::get('manutencao/whereMaquina/{paramet}', 'ManutencaoController@where');
            Route::apiResource('horimetro', 'HorimetroController');
            Route::apiResource('maquina', 'MaquinaController');
            Route::apiResource('marca-maquina', 'MarcaMaquinaController');
            Route::apiResource('modelo-maquina', 'ModeloMaquinaController');
            Route::apiResource('tipo-maquina', 'TipoMaquinaController');

        });

    Route::namespace('Pecuaria')->group(function (){
        Route::apiResource('boletim', 'BoletimController');
        
    });

});


