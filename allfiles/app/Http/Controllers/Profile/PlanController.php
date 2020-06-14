<?php

namespace App\Http\Controllers\Profile;

use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class PlanController extends Controller
{
    public function index(){
        $userauthId = Auth::user()->id;
        $user = User::with(['roles', 'avatar'])->where('id',$userauthId)->first();
        
        // return $user;
        return view('profile.plans.index',compact('user'));
    }
}
