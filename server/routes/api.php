<?php

Route::namespace('Api')->group(function(){

    Route::apiResource('setor', 'Api\SetorController');

    Route::namespace('Financeiro')->group(function(){
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


