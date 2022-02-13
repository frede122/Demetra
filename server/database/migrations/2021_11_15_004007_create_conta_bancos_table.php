<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateContaBancosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('conta_bancos', function (Blueprint $table) {
            $table->engine='InnoDb';
            $table->bigIncrements('id');
            $table->string('titular');
            $table->string('cpf_cnpj');
            $table->bigInteger('ag');
            $table->bigInteger('conta');
            $table->bigInteger('conta_digito');
            $table->string('chave_pix');
            $table->bigInteger('tipo_chave');
            $table->unsignedBigInteger('banco_id');
            $table->foreign('banco_id')->references('id')->on('bancos')->onUpdate('cascade')->onDelete('cascade');
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
        Schema::dropIfExists('conta_bancos');
    }
}
