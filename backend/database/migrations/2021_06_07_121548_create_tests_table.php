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
            $table->uudi('id')->primary();
            $table->integer('number');
            $table->uuid('teststation');
            $table->enum('state', ['registration', 'preregistration', 'appointment']);
            $table->dateTime('appointment')->nullable();
            $table->string('type')->nullable();
            $table->string('name');
            $table->string('firstname')->nullable();
            $table->string('street')->nullable();
            $table->string('zip')->nullable();
            $table->string('city')->nullable();
            $table->string('phone')->nullable();
            $table->string('email')->nullable();
            $table->date('dob')->nullable();
            $table->date('date');
            $table->boolean('certificate_offline');
            $table->boolean('certificate_email');
            $table->boolean('certificate_online');
            $table->boolean('certificate_cwa_personal');
            $table->boolean('certificate_cwa_anonym');
            $table->uuid('test_manufacturer_id')->nullable();
            $table->string('test_charge')->nullable();
            $table->string('test_result')->nullable();
            $table->time('time_register')->nullable();
            $table->time('time_reception')->nullable();
            $table->time('time_test')->nullable();
            $table->time('time_evaluation')->nullable();
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
