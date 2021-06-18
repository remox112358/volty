<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\Models\Column;
use App\Http\Controllers\API\BaseController;

class ColumnController extends BaseController
{
    /**
     * Returns the authenticated user columns.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function fetch(Request $request)
    {
        return $this->sendResponse(Auth::user()->columns, 'User columns received');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $lastColumnInBoard = Column::where('board_id', $request->input('board_id'))
                          ->orderBy('index', 'desc')
                          ->first();

        /**
         * Create column.
         */
        $column = Column::create([
            'user_id'  => Auth::user()->id,
            'board_id' => $request->input('board_id'),
            'name'     => $request->input('name'),
            'index'    => $lastColumnInBoard ? $lastColumnInBoard->index + 1 : 1,
        ]);

        return $this->sendResponse($column, 'Column "' . $request->input('name') . '" created successfully');
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
        $column->update([
          'name'  => $request->input('name') ?? $column->name,
          'index' => $request->input('index') ?? $column->index,
        ]);

        return $this->sendResponse($column, 'Column "' . $column->name . '" updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Column  $column
     * @return \Illuminate\Http\Response
     */
    public function destroy(Column $column)
    {
        $column->delete();

        return $this->sendResponse($column, 'Column "' . $column->name . '" deleted');
    }

    /**
     * Clear the column.
     *
     * @param \App\Models\Column $column
     * @return \Illuminate\Http\Response
     */
    public function clear(Column $column)
    {
        return $this->sendResponse($column, 'Test');
    }
}
