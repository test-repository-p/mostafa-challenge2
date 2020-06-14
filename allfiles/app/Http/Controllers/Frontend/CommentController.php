<?php

namespace App\Http\Controllers\Frontend;

use App\Comment;
use Illuminate\Http\Request;
use function PHPSTORM_META\map;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class CommentController extends Controller
{

    public function store(Request $request, $pid)
    {
        if (auth()->user()) {
            $validatedData = $request->validate([
                'title' => 'required|min:3|max:100',
                'desc' => 'required|min:3|max:1000',
            ], [
                'title.required' => 'لطفا عنوان توضیحات  را وارد نمایید.',
                'title.min' => 'عنوان بیشتر از 3 کاراکتر باشد.',
                'desc.required' => 'لطفا توضیحات را وارد نمایید.',
                'desc.min' => 'توضیحات بیشتر از 3 کاراکتر باشد',
            ]);
        } else {
            $validatedData = $request->validate([
                'name' => 'required|min:3|max:100',
                'title' => 'required|min:3|max:100',
                'email' => 'required|email',
                'desc' => 'required|min:3|max:1000',
            ], [
                'name.required' => 'لطفا نام خود را وارد نمایید.',
                'name.min' => 'نام بیشتر از 3 کاراکتر باشد.',
                'title.required' => 'لطفا عنوان توضیحات  را وارد نمایید.',
                'title.min' => 'عنوان بیشتر از 3 کاراکتر باشد.',
                'email.required' => 'لطفا ایمیل را وارد نمایید.',
                'email.email' => 'فرمت ایمیل را بررسی بفرمایید.',
                'desc.required' => 'لطفا توضیحات را وارد نمایید.',
                'desc.min' => 'توضیحات بیشتر از 3 کاراکتر باشد',
            ]);
        }

        $comment = new Comment();
        $comment->product_id =  $pid;
        $comment->user_id = (auth()->user()) ?  auth()->user()->id : null;
        $comment->name  = $request->input('name');
        $comment->email  = $request->input('email');
        $comment->subject =  $request->input('title');
        $comment->des =  $request->input('desc');
        $comment->save();

        return response()->json([
            "success" => '200',
            "message" => "نظر شما با موفقیت ثبت شد. پس از تایید به نمایش عمومی در خواهد آمد.",
        ]);
    }
}
