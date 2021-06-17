<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\API\BoardController;
use App\Http\Controllers\API\ColumnController;

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

Route::post('/login', [AuthController::class, 'login']);
Route::post('/signup', [AuthController::class, 'signup']);

Route::group(['middleware' => 'auth:api'], function() {
  Route::get('/logout', [AuthController::class, 'logout']);

  Route::get('/users/fetch', [UserController::class, 'fetch']);

  Route::get('/boards/fetch', [BoardController::class, 'fetch']);
  Route::resource('boards', BoardController::class);

  Route::get('/columns/fetch', [BoardController::class, 'fetch']);
  Route::resource('columns', ColumnController::class);
});
