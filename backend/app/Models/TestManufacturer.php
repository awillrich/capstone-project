<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use GoldSpecDigital\LaravelEloquentUUID\Database\Eloquent\Model;

class TestManufacturer extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'name',
        'pzn',
    ];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
        'deleted_at' => 'datetime',
    ];

    public function tests() {
        return $this->hasMany(Test::class);
    }
}
