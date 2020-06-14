<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Slider extends Model
{
    public function photo(){
        return $this->belongsTo(Photo::class);
    }

    public function back(){
        return $this->belongsTo(Photo::class);
    }
}
