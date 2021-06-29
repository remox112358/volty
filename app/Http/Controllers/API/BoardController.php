<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use Carbon\Carbon;

use App\Models\Board;
use App\Http\Controllers\API\BaseController;

use Validator;

class BoardController extends BaseController
{
    /**
     * Validation rules.
     *
     * @var array
     */
    private $rules = [
        'name'  => 'required|string|min:4|max:16',
        'color' => 'required|string',
    ];

    /**
     * Returns the authenticated user boards.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function fetch(Request $request)
    {
        return $this->sendResponse(Auth::user()->boards, 'User boards received');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
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
         * Create board.
         */
        $board = Board::create([
          'user_id' => Auth::user()->id,
          'name'    => $request->input('name'),
          'color'   => $request->input('color'),
        ]);

        return $this->sendResponse($board, 'Board created successfully');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Board  $board
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Board $board)
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
         * Board update.
         */
        $board->update([
          'name'  => $request->input('name'),
          'color' => $request->input('color'),
        ]);

        return $this->sendResponse($board, 'Board updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Board  $board
     * @return \Illuminate\Http\Response
     */
    public function destroy(Board $board)
    {
        $board->delete();

        return $this->sendResponse($board, 'Board deleted');
    }
}
