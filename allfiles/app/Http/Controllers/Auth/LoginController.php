<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;

class LoginController extends Controller
{

    use AuthenticatesUsers;

    public function showLoginForm(Request $request)
    {
        if ($request->emailverify){
            $htitle = "ورود کاربران";
            $emailverify = trans('auth.verifyEmail');
            return view('frontend.home.login',compact('emailverify','htitle'));
        }
        $htitle = "ورود کاربران";
        return view('frontend.home.login',compact('htitle'));
    }

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }
}
