<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTestsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tests', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->integer('number');
            $table->uuid('test_station');
            $table->enum('state', ['registration', 'preregistration', 'appointment']);
            $table->dateTime('appointment')->nullable();
            $table->string('type')->default('quick');
            $table->string('name');
            $table->string('firstname');
            $table->string('street');
            $table->string('zip');
            $table->string('city');
            $table->string('phone');
            $table->string('email')->nullable();
            $table->date('dob');
            $table->date('date');
            $table->boolean('certificate_offline')->default(false);
            $table->boolean('certificate_email')->default(false);
            $table->boolean('certificate_online')->default(false);
            $table->boolean('certificate_cwa_personal')->default(false);
            $table->boolean('certificate_cwa_anonym')->default(false);
            $table->uuid('test_manufacturer_id')->nullable();
            $table->string('test_charge')->nullable();
            $table->string('test_result')->nullable();
            $table->time('time_register')->nullable();
            $table->time('time_reception')->nullable();
            $table->time('time_test')->nullable();
            $table->time('time_evaluation')->nullable();
            $table->time('time_email_notification')->nullable();
            $table->time('time_positive_leader')->nullable();
            $table->time('time_health_department')->nullable();
            $table->time('time_health_department_confirmation')->nullable();
            $table->time('time_certificate')->nullable();
            $table->uuid('result_uuid')->nullable();
            $table->text('result_url')->nullable();
            $table->text('result_cwa_salt')->nullable();
            $table->text('result_cwa_hash')->nullable();
            $table->text('result_cwa_url')->nullable();
            $table->uuid('customer_id')->nullable();
            $table->uuid('company_id')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tests');
    }
}
