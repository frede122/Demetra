<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDebitosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('debitos', function (Blueprint $table) {
            $table->bigIncrements('debito_id');
            $table->unsignedBigInteger('docs_id');
            $table->foreign('docs_id')->references('docs_id')->on('docs')->onUpdate('cascade')->onDelete('cascade');
            $table->string('data', 50);
            $table->unsignedBigInteger('fornecedor_id');
            $table->foreign('fornecedor_id')->references('fornecedor_id')->on('fornecedores')->onUpdate('cascade')->onDelete('cascade');
            $table->string('descricao', 50);
            $table->integer('quantidade');
            $table->integer('valor_unitario');
            $table->unsignedBigInteger('setor_id');
            $table->foreign('setor_id')->references('setor_id')->on('setores')->onUpdate('cascade')->onDelete('cascade');
            $table->unsignedBigInteger('sub_categoria_id');
            $table->foreign('sub_categoria_id')->references('sub_categoria_id')->on('sub_categorias')->onUpdate('cascade')->onDelete('cascade');
            $table->timestamps();
        });
    }


    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('debitos');
    }
}
