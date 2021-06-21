<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Column extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'index',
        'user_id',
        'board_id',
    ];

    /**
     * Returns the column cards.
     *
     * @return \App\Models\Card
     */
    public function cards()
    {
        return $this->hasMany(Card::class);
    }
}
