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
            $table->bigIncrements('modelo_maquina_id');
            $table->unsignedBigInteger('marca_maquina_id');
            $table->foreign('marca_maquina_id')->references('marca_maquina_id')->on('marca_maquinas')->onUpdate('cascade')->onDelete('cascade');
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
