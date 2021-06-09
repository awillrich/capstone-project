<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
#use Illuminate\Database\Eloquent\Model;
use GoldSpecDigital\LaravelEloquentUUID\Database\Eloquent\Model;


class TestStation extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'number',
        'sign',
        'name',
        'street',
        'zip',
        'city',
        'phone',
        'email',
        'bsnr',
    ];

    protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];
}
