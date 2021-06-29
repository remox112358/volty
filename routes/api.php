<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\API\CardController;
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

  /**
   * Auth controller routes.
   */
  Route::get('/logout', [AuthController::class, 'logout']);

  /**
   * User controller routes.
   */
  Route::prefix('users')->group(function() {
    Route::get('/fetch', [UserController::class, 'fetch']);
  });

  /**
   * Board controller routes.
   */
  Route::prefix('boards')->group(function() {
    Route::get('/fetch', [BoardController::class, 'fetch']);
  });
  Route::resource('boards', BoardController::class);

  /**
   * Column controller routes.
   */
  Route::prefix('columns')->group(function() {
    Route::get('/fetch', [ColumnController::class, 'fetch']);
    Route::post('/{column}/clear', [ColumnController::class, 'clear']);
    Route::put('/{column}/refresh', [ColumnController::class, 'refresh']);
  });
  Route::resource('columns', ColumnController::class);

  /**
   * Card controller routes.
   */
  Route::prefix('cards')->group(function() {
    Route::get('/fetch', [CardController::class, 'fetch']);
    Route::put('/{card}/refresh', [CardController::class, 'refresh']);
  });
  Route::resource('cards', CardController::class);

});
