<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMaquinasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('maquinas', function (Blueprint $table) {

            $table->engine='InnoDb';
            $table->bigIncrements('id');
            $table->string('nome', 100);
            $table->date('ano');
            $table->string('tipo', 50);
            $table->unsignedBigInteger('modelo_maquina_id');
            $table->foreign('modelo_maquina_id')->references('id')->on('modelo_maquinas')->onUpdate('cascade')->onDelete('cascade');

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
        Schema::dropIfExists('maquinas');
    }
}
