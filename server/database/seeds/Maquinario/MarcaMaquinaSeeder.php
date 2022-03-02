<?php

// namespace App\Database\Seeds\Maquinario;

use App\Models\Maquinario\MarcaMaquina;
use Illuminate\Database\Seeder;

class MarcaMaquinaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        MarcaMaquina::create(["id" => 1, "nome" => "New Holland" ]);
        MarcaMaquina::create(["id" => 2, "nome" => "Jhon Deere" ]);
        MarcaMaquina::create(["id" => 3, "nome" => "Massey Fergusson" ]);
        MarcaMaquina::create(["id" => 4, "nome" => "Ford" ]);
        MarcaMaquina::create(["id" => 5, "nome" => "Case" ]);
        MarcaMaquina::create(["id" => 6, "nome" => "Valtra" ]);

    }
}
