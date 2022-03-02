<?php

use App\Models\Maquinario\ModeloMaquina;
use Illuminate\Database\Seeder;

class ModeloMaquinaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        ModeloMaquina::create(["marca_maquina_id" => 1, "tipo_maquina_id" => 1, "nome" => "TT e TTF" ]);
        ModeloMaquina::create(["marca_maquina_id" => 1, "tipo_maquina_id" => 1, "nome" => "SERIE 30" ]);
        ModeloMaquina::create(["marca_maquina_id" => 1, "tipo_maquina_id" => 1, "nome" => "TL5" ]);
        ModeloMaquina::create(["marca_maquina_id" => 1, "tipo_maquina_id" => 1, "nome" => "T4" ]);
        ModeloMaquina::create(["marca_maquina_id" => 1, "tipo_maquina_id" => 1, "nome" => "T5" ]);
        ModeloMaquina::create(["marca_maquina_id" => 1, "tipo_maquina_id" => 1, "nome" => "T6" ]);
        ModeloMaquina::create(["marca_maquina_id" => 1, "tipo_maquina_id" => 1, "nome" => "T7" ]);
        ModeloMaquina::create(["marca_maquina_id" => 1, "tipo_maquina_id" => 1, "nome" => "T8" ]);
        ModeloMaquina::create(["marca_maquina_id" => 1, "tipo_maquina_id" => 1, "nome" => "T9" ]);

        ModeloMaquina::create(["marca_maquina_id" => 2, "tipo_maquina_id" => 1, "nome" => "jd 6415" ]);

        ModeloMaquina::create(["marca_maquina_id" => 3, "tipo_maquina_id" => 1, "nome" => "MF 275" ]);
        ModeloMaquina::create(["marca_maquina_id" => 3, "tipo_maquina_id" => 1, "nome" => "MF 292" ]);
        ModeloMaquina::create(["marca_maquina_id" => 3, "tipo_maquina_id" => 1, "nome" => "MF 4400" ]);
        ModeloMaquina::create(["marca_maquina_id" => 3, "tipo_maquina_id" => 1, "nome" => "MF 4200 Xtra" ]);

        ModeloMaquina::create(["marca_maquina_id" => 4, "tipo_maquina_id" => 1, "nome" => "4600" ]);
        ModeloMaquina::create(["marca_maquina_id" => 4, "tipo_maquina_id" => 1, "nome" => "6600" ]);
    }
}
