<?php

namespace App;

use App\Post;
use Illuminate\Database\Eloquent\Model;

class Photo extends Model
{
    
    protected $uploads = '/storage/photos/';
    protected $thumbpath = '/storage/photos/thumb_';

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function getPathAttribute($ax)
    {
        return $this->uploads . $ax;
    }

    public function getThumbAttribute($ax)
    {
        return $this->thumbpath . $ax;
    }

//    public function getIdAttribute($ax)   // Sample For ME
//    {
//        return 'mostafaaaaaa'.$ax;
//    }

    public function products()
    {
        return $this->belongsToMany(Product::class);
    }

    public function posts(){
        return $this->hasMany(Post::class);
    }
}
