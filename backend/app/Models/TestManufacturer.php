<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TestManufacturer extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'name',
        'pzn',
    ];

    protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];
}
