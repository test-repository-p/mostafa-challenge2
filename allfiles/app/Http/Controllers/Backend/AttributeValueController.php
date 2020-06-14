<?php

namespace App\Http\Controllers\Backend;

use App\AttributeGroup;
use App\AttributeValue;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Session;

class AttributeValueController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $attributesVale = AttributeValue::with('attributeGroup')->paginate(10);
//        dd ($attributesVale);
        return view ('admin.attributes-value.index',compact('attributesVale'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $attributesGroup = AttributeGroup::all();
        return view('admin.attributes-value.create',compact('attributesGroup'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $attributeValue = new AttributeValue();
        $attributeValue->title = $request->input('title');
        $attributeValue->attributeGroup_id = $request->input('attribute_group');

        $attributeValue->save();
        Session::flash('attributes','مقدار ویژگی با موفقیت درج شد');
        return redirect(route('attributes-value.index'));
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
        $attributesGroup = AttributeGroup::all();
        $attributeValue = AttributeValue::with('attributeGroup')->findOrFail($id);
//return $attributeValue;
        return view('admin.attributes-value.edit',compact('attributesGroup','attributeValue'));
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
        $attribute = AttributeValue::findOrFail($id);
        $attribute->title = $request->input('title');
        $attribute->attributeGroup_id = $request->input('attribute_group');

        $attribute->save();
        Session::flash('attributes','مقدار ویژگی با موفقیت ویرایش شد');
        return redirect(route('attributes-value.index'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $attribute = AttributeValue::findOrFail($id);
        $attribute->delete();

        Session::flash('attributes','مقدار ویژگی با موفقیت حذف شد');
        return redirect(route('attributes-value.index'));
    }
}
