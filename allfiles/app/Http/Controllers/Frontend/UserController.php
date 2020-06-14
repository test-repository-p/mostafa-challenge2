<?php

namespace App\Http\Controllers\Frontend;

use App\Events\User\UserCreateEvent;
use App\Notifications\SendVerifyNotification;
use App\Role;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Mockery\Exception;

class UserController extends Controller
{
    public function register(Request $request)
    {
        $checkmobile = User::where('phone', $request->input('mobile'))->get();
        $checkemail = User::where('email', $request->input('email'))->get();
        // Alternative To Top
        // $check = User::select('email','phone')->where('email',$request->input('email'))->where('phone',$request->input('mobile'))->get();
        try {
            if (sizeof($checkmobile) == 0 && sizeof($checkemail) == 0) {
                $user = new User();
                $user->name = $request->input('name');
                $user->email = $request->input('email');
                $user->password = Hash::make($request->input('password'));
                $user->phone = $request->input('mobile');
                $user->verifycode = $this->generateVerify();
                if ($user->save()) {
                    $role = Role::where('title', Role::UserRole)->first();
                    $user->roles()->attach($role->id);

                    /*
                     * Run UserCreateEvent Event
                     */
                    event(new UserCreateEvent($user));

                    return response()->json([
                        'error' => false,
                        'message' => trans('auth.verifyEmail')
                    ]);
                }

            } else if (sizeof($checkemail) != 0) {
                return response()->json([
                    'error' => true,
                    'message' => [
                        'email' => ' ایمیل ' . $request->email . ' قبلا در سامانه ثبت شده است '
                    ]
                ]);
            } else {
                return response()->json([
                    'error' => true,
                    'message' => [
                        'mobile' => ' موبایل ' . $request->mobile . '  قبلا در سامانه ثبت شده است '
                    ]
                ]);
            }
        } catch (Exception $exception) {
//           dd($exception->getMessage());
            return response()->json([
                'error' => true
            ]);
        }

    }

    public function smsVerify(Request $request)
    {
        $user = User::where('verifycode', $request->input('smsCode'))->first();
        if ($user) {
//            $user->verifycode = '0';
//            $user->status = '0';
//            $user->save();
            return response()->json([
                'error' => false
            ]);

        } else {
            return response()->json([
                'error' => true
            ]);
        }
    }

    public function generateVerify()
    {
        $number = mt_rand(10000, 99999);
        return (string)$number + 21;
    }

    public function activeuser($verifycode)
    {
        $user = User::where('verifycode', $verifycode)->first();
        if (isset($user)) {
//            return $user;
            $user->verifycode = '0';
            $user->status = '0';
            $user->save();
            return redirect()->route('login')->with('verifyok', trans('validation.verifyok'));
        }
        return redirect()->route('login')->with('verifynotok', trans('validation.verifynotok'));
    }

}
