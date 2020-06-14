<?php

namespace App;


use App\User;
use App\Photo;
use App\PostCategory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    
    public function postCategory()
    {
        return $this->belongsTo(PostCategory::class,'category_id','id');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }


    public function photo()
    {
        return $this->belongsTo(Photo::class);
    }
}
