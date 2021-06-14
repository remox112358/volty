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
        $validator = Validator::make($request->all(), [
            'username' => 'required',
            'email'    => 'required|email|unique:users',
            'password' => 'required',
        ]);

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

        return $this->sendResponse([], 'User registered successfuly');
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

            return $this->sendResponse($success, 'User logged in successfully');

        }

        return $this->sendError('Invalid details');
    }

    /**
     * Logout API user.
     *
     * @return \Illuminate\Http\Response
     */
    public function logout()
    {
        /**
         * User logout
         */
        Auth::logout();

        return $this->sendResponse([], 'User successfully logged out');
    }

    public function test()
    {
        return $this->sendResponse(['test' => Auth::user()], 'Test');
    }
}
