<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UsersTableSeeder::class);
        $this->call(MarcaMaquinaSeeder::class);
        $this->call(TipoMaquinaSeeder::class);
        $this->call(ModeloMaquinaSeeder::class);
    }
}
