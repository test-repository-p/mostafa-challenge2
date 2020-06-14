<?php

namespace App\Http\Controllers\Frontend;

use App\User;
use App\Photo;
use App\Product;
use App\Product_package;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\View;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($slug = null)
    {
        $product = Product::with(['comments' => function ($query) {
            $query->with('user')->where('status', 0);
        }, 'brand', 'categories', 'user', 'attributeValues.attributeGroup'])->where('slug', $slug)->first();
        // return $product;

        $companylogo = Photo::whereId($product->user->photo_id)->first();

        $relatedproduct = Product::with('categories')->whereHas('categories', function ($q) use ($product) {
            $q->whereIn('id', $product->categories);
        })->get();

        $colors = DB::table('product_packages')
            ->select('colors.name as cname', 'colors.id as cid')
            ->join('colors', 'colors.id', 'colorid')
            ->where('product_id', $product->id)
            ->distinct('colors.name')->get();


        // return $colors;

        if ($product) {
            // return $product;
            // return $relatedproduct;
            return View('frontend.home.product', compact('colors', 'product', 'relatedproduct', 'companylogo'));
        } else {
            return abort(404);
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
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
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
