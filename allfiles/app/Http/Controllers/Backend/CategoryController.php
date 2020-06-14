<?php

namespace App\Http\Controllers\Backend;

use App\Product;
use App\Category;
use App\AttributeGroup;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Session;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Storage;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categories = Category::where('parent_id',0)->orderBy('order','desc')
            ->get();
        return view('admin.categories.index',compact('categories'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $categories = Category::with('childrenRecursive')
            ->where('parent_id',0)
            ->get();
        //    return $categories;
        return view('admin.categories.create',compact('categories'));
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


        $categories = new Category();
        $categories->name = $request->input('name');
        $categories->slug = $this->makeSlug($request->name);




        $categories->save();
        Session::flash('success','محصول مورد نظر با موفقت درج شد.');
        return redirect(route('categories.index'));
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
        $categories = Category::with('childrenRecursive')
            ->where('parent_id',0)
            ->paginate(100);

        $category = Category::findOrFail($id);
        //    return $category;

        return view('admin.categories.edit',compact('categories','category'));

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
        $category = Category::findOrFail($id);
        $category->name = $request->input('name');
        $category->slug = $this->makeSlug($request->name);

        $category->order = $request->input('order');


        $category->save();

        Session::flash('success','دسته بندی با موفقیت ویرایش شد');
        return redirect(route('categories.index'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $category = Category::with(['childrenRecursive','attributeGroups','products'])
            ->where('id',$id)
            ->first();

        // return $category;

        if(count($category->products) > 0){
            Session::flash('delete_error','با توجه به اینکه این گروه دارای محصول می باشد امکان حذف آن وجود ندارد.');
            return redirect(route('categories.index'));
        }

        if(count($category->attributeGroups) > 0){
            Session::flash('delete_error','با توجه به اینکه این دسته بندی دارای ویژگی می باشد لطفا ابتدا ویژگی های متصل به این دسته بندی را پاک نمایید. برای این کار روی گذینه تنظیمات کلیک نمایید.');
            return redirect(route('categories.index'));
        }

        if( count($category->childrenRecursive) > 0 ){
            Session::flash('delete_error','با توجه به اینکه این دسته بندی دارای زیر دسته می باشد بنابراین امکان حذف این دسته نمی باشد!');
            return redirect(route('categories.index'));
        }
        $category->delete();
        Session::flash('delete_success','دسته با موفقیت حذف شد');

        return redirect(route('categories.index'));
    }

    public function indexSetting($id)
    {
        $category = Category::findOrFail($id);
        $attributeGroups = AttributeGroup::all();
        return view('admin.categories.index-setting',compact('category','attributeGroups'));
    }

    public function saveSetting(Request $request,$id)
    {
        $category  = Category::findOrFail($id);
        $category->attributeGroups()->sync($request->attributeGroups);  // Many To many Method
        return redirect(route('categories.index'));
    }

    public function apiIndex()
    {
        $categories = Category::with('childrenRecursive')
            ->where('parent_id',0)
            ->get();

        $result = [
            'categories' => $categories
        ];

        return response()->json($result,200);
    }


    public function apiIndexAttribute(Request $request)
    {

        $categories = $request->all();
        $attribureGroup = AttributeGroup::with('attributesValue')
            ->whereHas('categories',function ($query) use ($categories){
                $query->whereIn('categories.id',$categories);
            })->get();
        $result = [
            'attributes' => $attribureGroup
        ];

        return response()->json($result,200);

    }


}
