<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAbastecimentosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('abastecimentos', function (Blueprint $table) {

            $table->engine='InnoDb';
            $table->bigIncrements('id');
            $table->unsignedBigInteger('maquina_id');
            $table->foreign('maquina_id')->references('id')->on('maquinas')->onUpdate('cascade')->onDelete('cascade');
            $table->float('litros');
            $table->date('data');
            $table->date('hora');
            $table->float('horimetro');

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
        Schema::dropIfExists('abastecimentos');
    }
}
