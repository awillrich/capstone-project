<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class EditPassportForUserIdUuid extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('oauth_access_tokens', function (Blueprint $table) {
            $table->dropColumn('user_id');
        });
        Schema::table('oauth_access_tokens', function (Blueprint $table) {
            $table->uuid('user_id')->index()->nullable();
        });
        Schema::table('oauth_clients', function (Blueprint $table) {
            $table->dropColumn('user_id');
        });
        Schema::table('oauth_clients', function (Blueprint $table) {
            $table->uuid('user_id')->index()->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('oauth_access_tokens', function (Blueprint $table) {
            $table->dropColumn('user_id');
        });
        Schema::table('oauth_access_tokens', function (Blueprint $table) {
            $table->string('user_id')->index()->nullable();
        });
        Schema::table('oauth_clients', function (Blueprint $table) {
            $table->dropColumn('user_id');
        });
        Schema::table('oauth_clients', function (Blueprint $table) {
            $table->string('user_id')->index()->nullable();
        });
    }
}
