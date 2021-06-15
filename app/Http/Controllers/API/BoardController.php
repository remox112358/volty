<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\Models\Board;
use App\Http\Controllers\API\BaseController;

class BoardController extends BaseController
{
    /**
     * Validation rules.
     *
     * @var array
     */
    private $rules = [
        'name'  => 'required|string|min:4|max:32',
        'color' => 'required|string|min:4|max:32',
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
         * Create board.
         */
        $board = Board::create([
          'user_id' => Auth::user()->id,
          'name'    => $request->input('name'),
          'color'   => $request->input('color'),
        ]);

        return $this->sendResponse($board, 'Board "' . $request->input('name') . '" created successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
