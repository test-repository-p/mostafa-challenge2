<?php

namespace App\Http\Controllers\Backend;

use App\Brand;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Validator;

class BrandController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $brands = Brand::paginate(10);
        return view('admin.brands.index', compact('brands'));

        //        return response()->json(['name' => 'Abigail', 'state' => 'CA']);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

        return view('admin.brands.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validateor = Validator::make($request->all(), [
            'title' => 'required|unique:brands',
            'description' => 'required',
            'photo_id' => 'required'
        ], [
            'title.required' => 'لطفا عنوان را وارد نمایید .',
            'title.unique' => 'این برند قبلا ثبت شده است.',
            'description.required' => 'لطفا توضیحات برند را وارد نمایید.',
            'photo_id.required' => 'لطفا تصویر برند را وارد نمایید.'
        ]);

        if ($validateor->fails()) {
            return redirect(route('brands.create'))->withErrors($validateor)->withInput();
        } else {
            $brand = new Brand();
            $brand->title = $request->input('title');
            $brand->description = $request->input('description');
            $brand->photo_id = $request->input('photo_id');

            if ($request->input('photo_id')  == 1) {
                Session::flash('error', 'حجم فایل بالا می باشد');
            } else {
                Session::flash('success', 'برند با موفقیت درج شد');
                $brand->save();
            }
            return redirect(route('brands.index'));
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $brand = Brand::with('photo')->whereId($id)->first();
        return view('admin.brands.edit', compact('brand'));
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
        $validateor = Validator::make($request->all(), [
            'title' => 'required|unique:brands,title,' . $id,
            'description' => 'required'
        ], [
            'title.required' => 'لطفا عنوان را وارد نمایید .',
            'title.unique' => 'این برند قبلا ثبت شده است.',
            'description.required' => 'لطفا توضیحات برند را وارد نمایید.'
        ]);

        if ($validateor->fails()) {
            return redirect(route('brands.index'))->withErrors($validateor)->withInput();
        } else {
            $brand = Brand::findOrFail($id);
            $brand->title = $request->input('title');
            $brand->description = $request->input('description');
            $brand->photo_id = $request->input('photo_id');

            if ($request->input('photo_id')  == 1) {
                Session::flash('error', 'حجم فایل بالا می باشد');
            } else {
                Session::flash('success', 'برند با موفقیت ویرایش شد');
                $brand->save();
            }
            return redirect(route('brands.index'));
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $brand = Brand::findOrFail($id);
        $brand->delete();


        Session::flash('success', 'برند با موفقیت حذف شد');
        return redirect(route('brands.index'));
    }
}
