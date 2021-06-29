<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\Models\Column;
use App\Http\Controllers\API\BaseController;

use Validator;

class ColumnController extends BaseController
{
    /**
     * Validation rules.
     *
     * @var array
     */
    private $rules = [
        'name' => 'required|max:16',
    ];

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
         * Getting the last column in list.
         */
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

        return $this->sendResponse($column, 'Column created');
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
         * Column update.
         */
        $column->update([
          'name'  => $request->input('name') ?? $column->name,
          'index' => $request->input('index') ?? $column->index,
        ]);

        return $this->sendResponse($column, 'Column updated');
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

        return $this->sendResponse($column, 'Column deleted');
    }

    /**
     * Clear the column.
     *
     * @param \App\Models\Column $column
     * @return \Illuminate\Http\Response
     */
    public function clear(Column $column)
    {
        foreach ($column->cards as $card) {
          $card->delete();
        }

        return $this->sendResponse($column, 'Column cleared');
    }
}
