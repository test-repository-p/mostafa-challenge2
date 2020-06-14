<?php

namespace App\Http\Controllers\Backend;

use App\PostCategory;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Session;

class PostCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function makeSlug($string)
    {
        $string = strtolower($string);
        $string = str_replace(['؟','?'],'',$string);
        return preg_replace('/\s+/u','-',trim($string));
    }


    public function index()
    {
        $categories = PostCategory::all();
        return view('admin.postcategories.index',compact('categories'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.postcategories.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // return $this->makeSlug($request->input('title'));
        $postcategory = new PostCategory();
        $postcategory->title = $request->input('title');
        $postcategory->slug =  $this->makeSlug($request->input('title'));
        $postcategory->meta_description = "test";
        $postcategory->meta_keywords = "test";
        $postcategory->save();

        Session::flash('success','دسته بندی با موفقیت درج شد');
        return redirect(route('postcategory.index'));
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
        $category = PostCategory::findorFail($id);
        // return $category;
        return view('admin.postcategories.edit',compact('category'));
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
        // return $request->all();
        $postcategory = PostCategory::findorFail($id);

        $postcategory->title = $request->input('title');
        $postcategory->save();
        Session::flash('success','دسته بندی با موفقیت ویرایش شد');
        return redirect(route('postcategory.index'));

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $postcategory = PostCategory::findorFail($id);
        $postcategory->delete();
        Session::flash('success','دسته بندی با موفقیت حذف  شد');
        return redirect(route('postcategory.index'));
    }
}
