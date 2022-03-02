<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateModeloMaquinasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('modelo_maquinas', function (Blueprint $table) {

            $table->engine='InnoDb';
            $table->bigIncrements('id');
            $table->unsignedBigInteger('marca_maquina_id');
            $table->foreign('marca_maquina_id')->references('id')->on('marca_maquinas')->onUpdate('cascade')->onDelete('cascade');
            $table->unsignedBigInteger('tipo_maquina_id');
            $table->foreign('tipo_maquina_id')->references('id')->on('tipo_maquinas')->onUpdate('cascade')->onDelete('cascade');
            $table->string('nome', 100);

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
        Schema::dropIfExists('modelo_maquinas');
    }
}
