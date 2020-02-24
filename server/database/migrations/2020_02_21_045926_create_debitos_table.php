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
            $table->engine='InnoDb';
            $table->bigIncrements('debitos_id');

            $table->unsignedBigInteger('docs_id');
            $table->foreign('docs_id')->references('docs_id')->on('docs')->onUpdate('cascade')->onDelete('cascade');

            $table->integer('mes');

            $table->unsignedBigInteger('fornecedores_id');
            $table->foreign('fornecedores_id')->references('fornecedores_id')->on('fornecedores')->onUpdate('cascade')->onDelete('cascade');

            $table->string('descricao', 400);
            
            $table->float('quantidade');
            $table->float('valor_unitario');

            $table->unsignedBigInteger('setores_id');
            $table->foreign('setores_id')->references('setores_id')->on('setores')->onUpdate('cascade')->onDelete('cascade');

            $table->unsignedBigInteger('sub_categorias_id');
            $table->foreign('sub_categorias_id')->references('sub_categorias_id')->on('sub_categorias')->onUpdate('cascade')->onDelete('cascade');

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
