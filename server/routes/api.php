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

    Route::namespace('Pecuaria')->group(function (){
        Route::apiResource('boletim', 'BoletimController');
        
    });

});


