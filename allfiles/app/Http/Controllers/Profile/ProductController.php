<?php

namespace App\Http\Controllers\Profile;

use App\User;
use App\Brand;
use App\Product;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $userauthId = Auth::user()->id;
        $user = User::with(['roles', 'avatar'])->where('id',$userauthId)->first();
        $products = Product::where('user_id',$userauthId)->get();
    
        return view('profile.products.index',compact('products','user'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
//        $categories = Category::with('childrenRecursive')
//            ->where('parent_id',0)
//            ->get();
        $userauthId = Auth::user()->id;
        $user = User::with(['roles', 'avatar'])->where('id',$userauthId)->first();

        $brands = Brand::all();

        return view('profile.products.create',compact('categories','brands','user'));
    }


    public function generateSKU()
    {
        $number = mt_rand(10000,99999);

        if ($this->checkSKU($number)){
            return $this->generateSKU();
        }
        return (string)$number;
    }

    public function checkSKU($number){
        return Product::where('sku',$number)->exists();
    }

    public function makeSlug($string)
    {
        $string = strtolower($string);
        $string = str_replace(['؟','?'],'',$string);
        return preg_replace('/\s+/u','-',trim($string));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

//        return $request->all();


        $newproduct = new Product();
        $newproduct->title = $request->title;
        $newproduct->slug = $this->makeSlug($request->slug);
        $newproduct->sku = $this->generateSKU();
        $newproduct->status = $request->status;
        $newproduct->price = $request->price;
        $newproduct->discount_price = $request->price_discount;
        $newproduct->description = $request->description;
        $newproduct->brand_id = $request->brand;
        $newproduct->user_id = Auth::user()->id;

        $newproduct->save();

        $attribute = explode(',',$request->input('attributes')[0]);
        $photos = explode(',',$request->input('photo_id')[0]);

        $newproduct->categories()->sync($request->categories);
        $newproduct->attributeValues()->sync($attribute);
        $newproduct->photos()->sync($photos);

        Session::flash('success','محصول مورد نظر با موفقت درج شد.');
        return redirect(route('userproducts.index'));



    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $userauthId = Auth::user()->id;
        $user = User::with(['roles', 'avatar'])->where('id',$userauthId)->first();

        $brands = Brand::all();
        $product = Product::with('attributeValues','categories','brand','photos')->whereId($id)->first();
    //    return $product;+
        return view('profile.products.edit',compact('product','brands','user'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

//        return $request->all();
        $product = Product::findOrFail($id);
        $product->title = $request->title;
        $product->slug = $this->makeSlug($request->slug);
        $product->sku = $this->generateSKU();
        $product->status = $request->status;
        $product->price = $request->price;
        $product->discount_price = $request->price_discount;
        $product->description = $request->description;
        $product->brand_id = $request->brand;
        $product->user_id = Auth::user()->id;
        $product->save();

        $attribute = explode(',',$request->input('attributes')[0]);
        $photos = explode(',',$request->input('photo_id')[0]);

        $product->categories()->sync($request->categories);
        $product->attributeValues()->sync($attribute);
        $product->photos()->sync($photos);

        Session::flash('success','محصول مورد نظر با موفقت ویرایش شد.');
        return redirect(route('products.index'));


    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $product = Product::findOrFail($id);
        $product->delete();

        Session::flash('success','محصول مورد نظر با موفقت حذف شد.');
        return redirect(route('products.index'));

    }
}
