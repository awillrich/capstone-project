<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use GoldSpecDigital\LaravelEloquentUUID\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TestStation extends Model
{
    use HasFactory;
    use SoftDeletes;

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

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
        'deleted_at' => 'datetime',
    ];

    public function users()
    {
        return $this->hasMany(User::class);
    }

    public function tests()
    {
        return $this->hasMany(Test::class);
    }
}
