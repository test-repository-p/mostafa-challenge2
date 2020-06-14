<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class Users
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if(Auth::check()){
            if(Auth::user()->isUser() && Auth::user()->status == 0){
                return $next($request);
            }
        }
        return redirect('/')->with('notactive','لطفا جهت ورود به صفحه پروفایل ایمیل خود را بررسی بفرمایید.');
    }
}
