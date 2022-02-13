<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEstoqueAnimaisTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('estoque_animais', function (Blueprint $table) {
            $table->engine='InnoDb';
            $table->bigIncrements('id');
            $table->date('mes_referencia');
            $table->year('ano_referencia');
            $table->unsignedBigInteger('animal_id');
            $table->foreign('animal_id')->references('id')->on('animais')->onUpdate('cascade')->onDelete('cascade');
            $table->integer('quantidade');
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
        Schema::dropIfExists('estoque_animais');
    }
}
