<?php

// namespace App\Database\Seeds\Maquinario;

use App\Models\Maquinario\TipoMaquina;
use Illuminate\Database\Seeder;

class TipoMaquinaSeeder extends Seeder
{
    /**namespace Database\Seeders
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        TipoMaquina::create(["id" => 1, "nome" => "Trator"]);
        TipoMaquina::create(["id" => 2, "nome" => "Carro"]);
        TipoMaquina::create(["id" => 3, "nome" => "Caminhão"]);
        TipoMaquina::create(["id" => 4, "nome" => "Autopropilido"]);
        TipoMaquina::create(["id" => 5, "nome" => "Colheitadeira"]);
    }
}
