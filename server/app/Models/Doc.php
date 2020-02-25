<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Doc extends Model
{
    protected $primaryKey = 'docs_id';
    protected $fillable = [
        'documento'
    ];
}
