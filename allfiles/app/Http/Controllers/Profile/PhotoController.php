<?php

namespace App\Http\Controllers\Profile;

use App\Http\Controllers\Controller;
use App\Photo;
use Illuminate\Http\Request;
use Illuminate\Http\File;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;


class PhotoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function upload(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'file' => 'required|mimes:jpeg,jpg,bmp,png|max:10240'
        ]);

        $uploadedFile = $request->file('file');
        $filename = time().$uploadedFile->getClientOriginalName();
        $original_name  = $uploadedFile->getClientOriginalName();

        

        // return $request->file('file');
        // return $request->all();


        if($validator->fails()){  // IF SIZE IS NOT VALID
            return response()->json([
                'photo_id' => 0
            ]);
        }else {     // IF SIZE IS VALID

            Storage::disk('local')->putFileAs(
                'public/photos', $uploadedFile, $filename
            );

            $photo = new Photo();
            $photo->original_name = $original_name;
            $photo->path = $filename;
            $photo->user_id = 1;
            $photo->save();

            return response()->json([
                'photo_id' => $photo->id
            ]);
        }
    }

    public function store(Request $request)
    {

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
