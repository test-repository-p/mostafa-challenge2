<?php

namespace App\Http\Controllers\Profile;

use App\User;
use App\Photo;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Storage;

class MainController extends Controller
{
    public function mainPage()
    {
        $userauthId = Auth::user()->id;
        $user = User::with(['roles', 'avatar'])->where('id',$userauthId)->first();
 
        // return $user;
        return view('profile.main.index', compact('user'));
    }

    public function userData()
    {
        $userauthId = Auth::user()->id;
        $user = User::with(['roles', 'avatar'])->where('id',$userauthId)->first();
        
        // return $user;
        return view('profile.userdata.edit',compact('user'));
    }

    public function userUpdate(Request $request,$userId){
        // return $request;

        $uploadedFile = $request->file('avatar');
        if($uploadedFile){
            $filename = time().$uploadedFile->getClientOriginalName();
            $original_name  = $uploadedFile->getClientOriginalName();
            Storage::disk('local')->putFileAs(
                'public/photos', $uploadedFile, $filename
            );
            $photo = new Photo();
            $photo->original_name = $original_name;
            $photo->path = $filename;
            $photo->user_id = $userId;
            if($photo->save()){

                $user = User::findOrFail($userId);
                // $user->name = $request->input('name');
                // $user->email = $request->input('email');    
                $user->address = $request->input('address');         
                $user->company = $request->input('company'); 
                $user->birthday = $request->input('birthday');    
                $user->gender = $request->input('gender');
                $user->lat = $request->input('lat');    
                $user->lng = $request->input('lng');    
                // $user->phone = $request->input('phone'); 
                $user->photo_id = $photo->id;
                $user->save();
                Session::flash('success','اطلاعات با موفقیت ویرایش شد');
                return redirect(route('user.data'));

            }


        }else{
            $user = User::findOrFail($userId);
            // $user->name = $request->input('name');
            // $user->email = $request->input('email');    
            $user->address = $request->input('address');
            $user->website = $request->input('website');
            $user->company = $request->input('company');
            $user->birthday = $request->input('birthday');    
            $user->gender = $request->input('gender');
            $user->lat = $request->input('lat');    
            $user->lng = $request->input('lng');    
            // $user->phone = $request->input('phone'); 
            $user->save();
            Session::flash('success','اطلاعات با موفقیت ویرایش شد');
            return redirect(route('user.data'));
        }
    }
}
