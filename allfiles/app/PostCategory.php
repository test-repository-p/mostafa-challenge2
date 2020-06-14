<?php

namespace App;

use App\Post;
use Illuminate\Database\Eloquent\Model;

class PostCategory extends Model
{
    public $table = "postcategories";
    public function posts(){
        return $this->hasMany(Post::class);
    }
}
