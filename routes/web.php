<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AppController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::view('/', 'app');

Route::get(
  '/{vue_router?}',
  [AppController::class, 'index'
])->name('app')
  ->where('vue_router', '[\/\w\.-]*');
