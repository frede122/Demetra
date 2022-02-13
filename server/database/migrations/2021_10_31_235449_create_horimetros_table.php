<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHorimetrosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('horimetros', function (Blueprint $table) {

            $table->engine='InnoDb';
            $table->bigIncrements('id');
            $table->unsignedBigInteger('maquina_id');
            $table->foreign('maquina_id')->references('id')->on('maquinas')->onUpdate('cascade')->onDelete('cascade');
            $table->float('hora_inicio');
            $table->float('hora_fim');
            $table->float('valor_hora');
            $table->string('descricao', 200);

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
        Schema::dropIfExists('horimetros');
    }
}
