<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'username',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * Returns the user boards.
     *
     * @return \App\Models\Board
     */
    public function boards()
    {
      return $this->hasMany(Board::class);
    }

    /**
     * Returns the user columns.
     *
     * @return \App\Models\Column
     */
    public function columns()
    {
      return $this->hasMany(Column::class);
    }

    /**
     * Returns the user cards.
     *
     * @return \App\Models\Card
     */
    public function cards()
    {
      return $this->hasMany(Card::class);
    }
}
