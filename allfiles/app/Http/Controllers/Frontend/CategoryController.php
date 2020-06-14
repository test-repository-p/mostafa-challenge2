<?php

namespace App\Http\Controllers\Frontend;

use App\Brand;
use App\Category;
use App\Photo;
use App\Product;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($slug = null)
    {
        if (Auth::check()) {
            $userauthId = Auth::user()->id;
            $user = User::with(['roles', 'avatar'])->where('id', $userauthId)->first();
        }
        $category = Category::where('slug',$slug)->first();

        // $taminkonande = User::whereHas('products.categories',function($q) use ($category) {
        //     $q->where('id',$category->id);
        // })->get();



        $categories = Category::with('childrenRecursive')
            ->where([['parent_id','=',0],['slug','=',$slug]])
            ->paginate(100);

            // return $category->id;

        $relatedproduct = Product::with(['photos','categories'])->whereHas('categories',function($q) use ($category) {
            $q->where('id',$category->id);
        })->get();

        // return $relatedproduct;

        $users = User::with('avatar')->whereHas('products.categories',function($q) use ($category) {
            $q->where('id',$category->id);
        })->get();

        // return $users;

        if($category){
            // return $product;
            // return $relatedproduct;
            return View('frontend.home.category' , compact('categories','category','relatedproduct','users'));
        }else{
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
