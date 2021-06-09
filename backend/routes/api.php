<?php

use App\Http\Controllers\TestController;
use App\Http\Controllers\TestManufacturerController;
use App\Http\Controllers\TestStationController;
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

#Route::middleware('auth:api')->apiResources([
Route::apiResources([
    'tests', TestController::class,
    'test_stations', TestStationController::class,
    'test_manufacturer', TestManufacturerController::class,
    ]);

