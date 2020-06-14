<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{

    protected $uploads = '/storage/photos/';

    public function children()
    {
        return $this->hasMany(Category::class,'parent_id');
    }

    public function childrenRecursive()
    {
        return $this->children()->with('childrenRecursive');// recursive all where with (WITH)
    }

    public function getPicAttribute($attributes)
    {
        return $this->uploads . $attributes;
    }



    public function getIconAttribute($attributes)
    {
        return $this->uploads . $attributes;
    }

    public function products()
    {
        return $this->belongsToMany(Product::class);
    }

    public function attributeGroups()  //MANY TO MANY BY  attributeGroup  (Pivot Table = attributegroup_category)
    {
            return $this->belongsToMany(Category::class,'attributegroup_category','category_id','attributeGroup_id');
    }


    public function child()
    {
        return $this->hasMany(Category::class,'parent_id');
    }
}

