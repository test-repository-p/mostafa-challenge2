<?php

namespace App\Http\Controllers\Backend;

use App\Post;
use App\User;
use App\Photo;
use App\PostCategory;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Storage;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function makeSlug($string)
    {
        $string = strtolower($string);
        $string = str_replace(['؟','?'],'',$string);
        return preg_replace('/\s+/u','-',trim($string));
    }

    public function index()
    {
        $posts = Post::with('user','postCategory')->get();
        // return $posts;
        return view('admin.posts.index',compact('posts'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $categories = PostCategory::all();
        return view('admin.posts.create',compact('categories'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        if (Auth::check()) {
            $userauthId = Auth::user()->id;
        }

        $uploadedFile = $request->file('avatar');
        $filename = time().$uploadedFile->getClientOriginalName();
        $original_name  = $uploadedFile->getClientOriginalName();
        Storage::disk('local')->putFileAs(
            'public/photos', $uploadedFile, $filename
        );
        $photo = new Photo();
        $photo->original_name = $original_name;
        $photo->path = $filename;
        $photo->user_id = $userauthId;
        if($photo->save()){

            $post = new Post();
            $post->title = $request->input('title');
            $post->slug = $this->makeSlug($request->input('title'));
            $post->descriptin = $request->input('description');
            $post->meta_description = $request->input('meta_description');
            $post->meta_keywords = $request->input('meta_keywords');
            $post->user_id = $userauthId;
            $post->category_id = $request->input('category');
            $post->status = $request->input('status');
            $post->photo_id = $photo->id;
            $post->save();

            Session::flash('success','مطلب جدید با موفقیت درج شد');
            return redirect(route('posts.index'));
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

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $post = Post::with('photo')->whereId($id)->first();

        // return $post;
        $categories = PostCategory::all();
        // return $categories;
        return view('admin.posts.edit',compact('post','categories'));
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
        if (Auth::check()) {
            $userauthId = Auth::user()->id;
        }

        if($request->file('avatar') == ''){

            $post = Post::findOrfail($id);
            $post->title = $request->input('title');
            $post->slug = $this->makeSlug($request->input('title'));
            $post->descriptin = $request->input('description');
            $post->meta_description = $request->input('meta_description');
            $post->meta_keywords = $request->input('meta_keywords');
            $post->user_id = $userauthId;
            $post->category_id = $request->input('category');
            $post->status = $request->input('status');
            $post->save();
            Session::flash('success','مطلب  با موفقیت ویرایش شد');
            return redirect(route('posts.index'));

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
            $photo->user_id = $userauthId;
            if($photo->save()){

                $post = Post::findOrfail($id);
                $post->title = $request->input('title');
                $post->slug = $this->makeSlug($request->input('title'));
                $post->descriptin = $request->input('description');
                $post->meta_description = $request->input('meta_description');
                $post->meta_keywords = $request->input('meta_keywords');
                $post->user_id = $userauthId;
                $post->category_id = $request->input('category');
                $post->status = $request->input('status');
                $post->photo_id = $photo->id;
                $post->save();

                Session::flash('success','مطلب  با موفقیت ویرایش شد');
                return redirect(route('posts.index'));
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
        $post = Post::findOrfail($id);
        $post->delete();
        Session::flash('success','مطلب  با موفقیت حذف شد');
        return redirect(route('posts.index'));
    }
}
