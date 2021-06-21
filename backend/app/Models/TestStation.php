<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
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
        'email_leader',
        'email_health_department',
        'use_certificate_email',
        'use_certificate_online',
        'use_certificate_cwa',
    ];

    protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    public function users() {
        return $this->hasMany(User::class);
    }

    public function tests() {
        return $this->hasMany(Test::class);
    }
}
