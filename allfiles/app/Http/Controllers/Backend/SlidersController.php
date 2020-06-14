<?php

namespace App\Http\Controllers\Backend;

use App\Slider;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Validator;

class SlidersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $sliders = Slider::all();
        return view('admin.sliders.index',compact('sliders'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.sliders.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validateor = Validator::make($request->all(),[
            'title' => 'required',
             'description' => 'required',
             'photo_id' => 'required',
         ],[
             'title.required' => 'لطفا عنوان را وارد نمایید .',
             'description.required' => 'لطفا توضیحات اسلاید را وارد نمایید.',
             'photo_id.required' => 'لطفا تصویر اسلاید را وارد نمایید.',
         ]);

         if($validateor->fails()){
            return redirect(route('sliders.create'))->withErrors($validateor)->withInput();
        }else{
            $slider = new Slider();
            $slider->title = $request->input('title');
            $slider->description = $request->input('description');
            $slider->photo_id = $request->input('photo_id');
            $slider->back_id = $request->input('back_id');

        
            Session::flash('success','اسلایدر با موفقیت درج شد');
            $slider->save();
          
            return redirect(route('sliders.index'));
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
        $slider = Slider::with(['photo','back'])->whereId($id)->first();
        // return $slider;
        return view('admin.sliders.edit',compact('slider'));
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
        $validateor = Validator::make($request->all(),[
            'title' => 'required',
             'description' => 'required',
             'photo_id' => 'required'
         ],[
             'title.required' => 'لطفا عنوان را وارد نمایید .',
             'description.required' => 'لطفا توضیحات اسلاید را وارد نمایید.',
             'photo_id.required' => 'لطفا تصویر اسلاید را وارد نمایید.'
         ]);

         if($validateor->fails()){
            return redirect(route('sliders.edit',$id))->withErrors($validateor)->withInput();
        }else{
            $slider = Slider::findOrFail($id);
            $slider->title = $request->input('title');
            $slider->description = $request->input('description');
            $slider->photo_id = $request->input('photo_id');
            $slider->back_id = $request->input('back_id');

        
            Session::flash('success','اسلایدر با موفقیت ویرایش شد');
            $slider->save();
          
            return redirect(route('sliders.index'));
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
        $slider = Slider::findOrFail($id);
        $slider->delete();

        Session::flash('success','اسلایدر با موفقیت حذف شد');
        return redirect(route('sliders.index'));
    }
}
