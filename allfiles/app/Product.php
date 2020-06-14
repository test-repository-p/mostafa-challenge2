<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    public $vahedPool = "تومان";


    public function brand()
    {
        return $this->belongsTo(Brand::class);
    }
    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }


    /*
     * Accessor
     */
    // public function getPriceAttribute($str)
    // {
    //     return number_format($str) ." " .$this->vahedPool;;
    // }

    /*
     * Accessor
     */
    // public function getDiscountPriceAttribute($data)
    // {
    //     return number_format($data) ." " .$this->vahedPool;
    // }

    public function attributeValues()
    {
        return $this->belongsToMany(AttributeValue::class, 'attributeValue_product', 'product_id', 'AttributeValue_id');
    }

    public function photos()
    {
        return $this->belongsToMany(Photo::class);
    }

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    public function packages()
    {
        return $this->hasMany(Product_package::class,'product_id');
    }
}
