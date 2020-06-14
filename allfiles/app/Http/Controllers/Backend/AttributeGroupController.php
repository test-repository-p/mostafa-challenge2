<?php

namespace App\Http\Controllers\Backend;

use App\AttributeGroup;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Session;

class AttributeGroupController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $attributes = AttributeGroup::all();
        return view('admin.attributes.index',compact('attributes'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.attributes.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $attribute = new AttributeGroup();
        $attribute->title = $request->input('title');
        $attribute->type = $request->input('type');

        $attribute->save();
        Session::flash('attributes','ویژگی با موفقیت درج شد');
        return redirect(route('attributes-group.index'));
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
        $attribute = AttributeGroup::findOrFail($id);
        return view('admin.attributes.edit',compact('attribute'));
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
        $attribute = AttributeGroup::findOrFail($id);
        $attribute->title = $request->input('title');
        $attribute->type = $request->input('type');

        $attribute->save();
        Session::flash('attributes','ویژگی با موفقیت ویرایش شد');
        return redirect(route('attributes-group.index'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $attribute = AttributeGroup::findOrFail($id);
        $attribute->delete();

        Session::flash('attributes','ویژگی با موفقیت حذف شد');
        return redirect(route('attributes-group.index'));
    }
}
