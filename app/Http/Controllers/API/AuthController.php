<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\Models\User;
use App\Http\Controllers\API\BaseController;

use Validator;

class AuthController extends BaseController
{
    /**
     * Validation rules.
     *
     * @var array
     */
    private $rules = [
        'username' => 'required|min:4|max:16',
        'email'    => 'required|email|unique:users',
        'password' => 'required|min:8|max:32',
    ];

    /**
     * Signup API user.
     *
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function signup(Request $request)
    {
        /**
         * Validation of transmitted parameters.
         */
        $validator = Validator::make($request->all(), $this->rules);

        /**
         * Sending error response if the validation fails.
         */
        if ($validator->fails()) {
            return $this->sendError('Validation error', $validator->errors());
        }

        /**
         * Request parameters.
         * Building password secuirity using `bcrypt`.
         */
        $input = $request->all();
        $input['password'] = bcrypt($input['password']);

        /**
         * Create user.
         */
        $user = User::create($input);

        return $this->sendResponse([], 'User registered');
    }

    /**
     * Login API user.
     *
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request)
    {
        /**
         * Trying to authorize.
         */
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {

            /**
             * Authorized user.
             */
            $user = Auth::user();

            /**
             * Success result.
             */
            $success['user']  = $user;
            $success['token'] = $user->createToken('MyApp')-> accessToken;

            return $this->sendResponse($success, 'User logged in');

        }

        return $this->sendError('Incorrect email or password');
    }

    /**
     * Logout API user.
     *
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function logout(Request $request)
    {
        /**
         * User logout
         */
        $request->user()->token()->revoke();

        return $this->sendResponse([], 'User logged out');
    }
}
