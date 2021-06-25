<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use GoldSpecDigital\LaravelEloquentUUID\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TestManufacturer extends Model
{
    use HasFactory;
    use SoftDeletes;

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

    public function tests()
    {
        return $this->hasMany(Test::class);
    }
}
