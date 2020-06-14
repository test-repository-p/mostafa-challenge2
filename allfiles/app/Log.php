<?php

namespace App;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Log extends Model
{
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
