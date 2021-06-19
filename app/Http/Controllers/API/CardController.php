<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\Models\Column;
use App\Http\Controllers\API\BaseController;

class ColumnController extends BaseController
{
    /**
     * Returns the authenticated user cards.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function fetch(Request $request)
    {
        return $this->sendResponse(Auth::user()->cards, 'User cards received');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $lastCardInColumn = Card::where('column_id', $request->input('column_id'))
                          ->orderBy('index', 'desc')
                          ->first();

        /**
         * Create card.
         */
        $card = Card::create([
            'user_id'   => Auth::user()->id,
            'column_id' => $request->input('column_id'),
            'text'      => $request->input('text'),
            'index'     => $lastCardInColumn ? $lastCardInColumn->index + 1 : 1,
        ]);

        return $this->sendResponse($column, 'Card created successfully');
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
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Column  $column
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Column $column)
    {
        // ...
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Column  $column
     * @return \Illuminate\Http\Response
     */
    public function destroy(Column $column)
    {
        // ...
    }

    /**
     * Clear the column.
     *
     * @param \App\Models\Column $column
     * @return \Illuminate\Http\Response
     */
    public function clear(Column $column)
    {
        // ...
    }
}
