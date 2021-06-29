<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\Models\Card;
use App\Http\Controllers\API\BaseController;

use Validator;

class CardController extends BaseController
{
    /**
     * Validation rules.
     *
     * @var array
     */
    private $rules = [
        'text' => 'required|max:256',
    ];

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
         * Getting the last card in list.
         */
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

        return $this->sendResponse($card, 'Card created');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Card  $card
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Card $card)
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
         * Card update.
         */
        $card->update([
          'text' => $request->input('text')
        ]);

        return $this->sendResponse($card, 'Card updated');
    }

    /**
     * Refresh the specified card index.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Card  $card
     * @return \Illuminate\Http\Response
     */
    public function refresh(Request $request, Card $card)
    {
        /**
         * Card update.
         */
        $card->update([
          'index'     => $request->input('index'),
          'column_id' => $request->input('column_id')
        ]);

        return $this->sendResponse($card, 'Card updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Card  $card
     * @return \Illuminate\Http\Response
     */
    public function destroy(Card $card)
    {
        $card->delete();

        return $this->sendResponse($card, 'Card deleted');
    }
}
