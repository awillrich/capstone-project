<?php

use App\Http\Controllers\Api\TestController as ApiTestController;
use App\Http\Controllers\Api\TestManufacturerController as ApiTestManufacturerController;
use App\Http\Controllers\Api\TestStationController as ApiTestStationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('tests', ApiTestController::class);
Route::resource('test_stations', ApiTestStationController::class);
Route::resource('test_manufacturers', ApiTestManufacturerController::class);


