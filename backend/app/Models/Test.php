<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
#use Illuminate\Database\Eloquent\Model;
use GoldSpecDigital\LaravelEloquentUUID\Database\Eloquent\Model;


class Test extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id',
        'number',
        'test_station',
        'appointment',
        'type',
        'name',
        'firstname',
        'street',
        'zip',
        'city',
        'phone',
        'email',
        'dob',
        'date',
        'certificate_offline',
        'certificate_email',
        'certificate_online',
        'certificate_cwa_personal',
        'certificate_cwa_anonym',
        'test_manufacturer_id',
        'test_charge',
        'test_result',
        'time_register',
        'time_reception',
        'time_test',
        'time_evaluation',
        'time_email_notification',
        'time_positive_leader',
        'time_health_department',
        'time_health_department_confirmation',
        'time_certificate',
        'result_uuid',
        'result_url',
        'result_cwa_salt',
        'result_cwa_hash',
        'result_cwa_url',
        'customer_id',
        'company_id',
    ];

    protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at',
        'date',
        'dob',
    ];

    public function test_station() {
        return $this->hasOne(TestStation::class);
    }

    public function test_manufacturer() {
        return $this->hasOne(TestManufacturer::class);
    }
}
