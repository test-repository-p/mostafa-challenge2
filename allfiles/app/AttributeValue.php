<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AttributeValue extends Model
{
    protected $table = "attributesValue";

    public function attributeGroup()
    {
        return $this->belongsTo(AttributeGroup::class,'attributeGroup_id');
    }

    public function products()
    {
        $this->belongsToMany(Product::class,'attributeValue_product','AttributeValue_id','product_id');
    }
}
