<?php

namespace App;

use App\ProductModel;
use Illuminate\Database\Eloquent\Model;

class Product_package extends Model
{

    public function color(){
        return $this->hasOne(Color::class,'id','colorid');
    }

    public function model(){
        return $this->hasOne(ProductModel::class,'id','modelid');
    }
}
