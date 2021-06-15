<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\Models\User;
use App\Models\Board;

use App\Http\Controllers\API\BaseController;

class UserController extends BaseController
{
    /**
     * Returns the authenticated user data.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function fetch(Request $request)
    {
        return $this->sendResponse(Auth::user(), 'User data received');
    }
}
