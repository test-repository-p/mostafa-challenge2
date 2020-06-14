<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Brand extends Model
{
    public function photo()
    {
        return $this->belongsTo(Photo::class,'photo_id','id');// AVALI BARAYE CLASSE   DOVOMI BARAYE FUNCTIONE
    }

    public function products()
    {
        return $this->hasMany(Product::class);
    }
}
