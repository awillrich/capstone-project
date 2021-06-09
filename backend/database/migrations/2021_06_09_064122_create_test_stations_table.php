<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTestStationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('test_stations', function (Blueprint $table) {
            $table->uudi('id')->primary();
            $table->integer('number');
            $table->string('sign');
            $table->string('name');
            $table->string('street');
            $table->string('zip');
            $table->string('city');
            $table->string('phone');
            $table->string('email');
            $table->integer('bsnr');
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
        Schema::dropIfExists('test_stations');
    }
}
