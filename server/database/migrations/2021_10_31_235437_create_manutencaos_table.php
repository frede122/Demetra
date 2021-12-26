<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateManutencaosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('manutencoes', function (Blueprint $table) {
            
            $table->engine='InnoDb';
            $table->bigIncrements('manutencao_id');
            $table->unsignedBigInteger('maquina_id');
            $table->foreign('maquina_id')->references('maquina_id')->on('maquinas')->onUpdate('cascade')->onDelete('cascade');
            $table->date('data');
            $table->string('descricao', 200);
            $table->float('valor');

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
        Schema::dropIfExists('manutencaos');
    }
}
