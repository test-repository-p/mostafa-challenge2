<?php

namespace App\Http\Controllers\Backend;

use App\Role;
use App\User;
use App\Photo;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Notifications\RegisterNotification;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Storage;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::with(['roles','avatar'])->get();
    // return ($users);
        return view('admin.users.index',compact('users'));

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $roles = Role::all();
        return view('admin.users.create',compact('roles'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $uploadedFile = $request->file('avatar');
        $filename = time().$uploadedFile->getClientOriginalName();
        $original_name  = $uploadedFile->getClientOriginalName();
        Storage::disk('local')->putFileAs(
            'public/photos', $uploadedFile, $filename
        );
        $photo = new Photo();
        $photo->original_name = $original_name;
        $photo->path = $filename;

        if(Auth::check()){
            $photo->user_id = Auth::user()->id;
        }else{
            $photo->user_id = 1;
        }


        if($photo->save()){

            $user = new User();
            $user->name = $request->input('name');
            $user->email = $request->input('email');
            $user->password = Hash::make($request->input('password'));
            $user->phone = $request->input('mobile');
            $user->website = $request->input('website');

            $user->company = $request->input('company');
            $user->birthday = $request->input('birthday');
            $user->gender = $request->input('gender');
            $user->address = $request->input('address');
            $user->lat = $request->input('lat');
            $user->lng = $request->input('lng');


            $user->status = $request->input('status');
            $user->photo_id = $photo->id;
            $user->save();


            $user->roles()->attach($request->input('roles'));

            // $user->notify(new RegisterNotification);
            Session::flash('success','کاربر با موفقیت درج شد');
            return redirect(route('users.index'));

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
        $user = User::with('avatar')->whereId($id)->first();
        $roles = Role::all();
        $roleee = $user->roles;
        return view('admin.users.edit',compact('user','roles','roleee'));
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

//return $request->file('avatar');
//
//if (!is_null($request->file('avatar')) ){
//    return $request->file('avatar');
//}

        if ($request->file('avatar') == '') {

            $user = User::findOrFail($id);
            $user->name = $request->input('name');
            $user->email = $request->input('email');

            $user->company = $request->input('company');
            $user->birthday = $request->input('birthday');
            $user->gender = $request->input('gender');
            $user->address = $request->input('address');
            $user->lat = $request->input('lat');
            $user->lng = $request->input('lng');

            if($request->input('password') != 'nodata'){
                $user->password = Hash::make($request->input('password'));
            }
            $user->phone = $request->input('mobile');
            $user->website = $request->input('website');
            $user->status = $request->input('status');
            $user->save();

            $user->roles()->sync($request->input('roles'));
            Session::flash('success','کاربر با موفقیت ویرایش شد');
            return redirect(route('users.index'));


        }else{
            $uploadedFile = $request->file('avatar');
            $filename = time().$uploadedFile->getClientOriginalName();
            $original_name  = $uploadedFile->getClientOriginalName();
            Storage::disk('local')->putFileAs(
                'public/photos', $uploadedFile, $filename
            );
            $photo = new Photo();
            $photo->original_name = $original_name;
            $photo->path = $filename;

            if(Auth::check()){
                $photo->user_id = Auth::user()->id;
            }else{
                $photo->user_id = 1;
            }

            if($photo->save()){

                $user = User::findOrFail($id);
                $user->name = $request->input('name');
                $user->email = $request->input('email');
                $user->password = Hash::make($request->input('password'));
                $user->phone = $request->input('mobile');
                $user->status = $request->input('status');
                $user->photo_id = $photo->id;
                $user->save();

                $user->roles()->sync($request->input('roles'));
                Session::flash('success','کاربر با موفقیت ویرایش شد');
                return redirect(route('users.index'));

            }
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
        $user = User::findOrfail($id);
        $user->delete();
        Session::flash('success','کاربر با موفقیت حذف شد');
        return redirect(route('users.index'));


    }
}
