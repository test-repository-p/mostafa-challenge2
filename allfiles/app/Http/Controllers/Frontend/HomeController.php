<?php

namespace App\Http\Controllers\Frontend;

use App\User;
use App\Brand;
use App\Category;
use App\Slider;
use App\Product;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Post;
use Illuminate\Support\Facades\Request as FacadesRequest;

class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * Home Return Data Of Home Page
     */
    public function index()
    {
        $ipAddress = FacadesRequest::ip();
        $latestproduct = Product::with('photos', 'categories')->orderBy('created_at', 'desc')->limit(10)->get();
        $brands = Brand::with('photo')->orderBy('created_at', 'desc')->get();
        $sliders = Slider::with(['back', 'photo'])->orderBy('id', 'desc')->get();
        $posts = Post::with('photo')->orderBy('id', 'desc')->limit(3)->get();
        $categories = Category::where('parent_id', '0')->orderBy('order', 'desc')->get();
        return view('frontend.home.index', compact('latestproduct', 'brands', 'sliders', 'posts', 'categories'));
    }

    /**
     * Mostafa Omrani
     * Send Arryay To Index page
     */
    public function mapData()
    {
        $users = User::with('avatar')->whereNotNull(['lat', 'lng'])->get();
        $avatar = '/storage/photos/test.png';
        foreach ($users as $u) {
            if ($u->company) {
                if ($u->avatar) {
                    $map[] = [(float)$u->lat, (float)$u->lng, "<img src='" . $u->avatar->path . "' class='leaflet-popup-image'><div class='leaflet-popup-inner'><h3><a href='" . route('user.page', $u->company) . "'>" . $u->name . "</a></h3><div style='overflow-wrap: break-word;'><span style='font-weight: bold;'>وب سایت : </span><a target='_blank' rel='nofollow' href='" . $u->website . "'>نمایش</a></div><div style='overflow-wrap: break-word;'><span style='font-weight: bold;'>آدرس : </span>" . $u->address . "</div></div>"];
                } else {
                    $map[] = [(float)$u->lat, (float)$u->lng, "<img src='" . $avatar . "' class='leaflet-popup-image'><div class='leaflet-popup-inner'><h3><a href='" . route('user.page', $u->company) . "'>" . $u->name . "</a></h3><div style='overflow-wrap: break-word;'><span style='font-weight: bold;'>وب سایت : </span><a target='_blank' rel='nofollow' href='" . $u->website . "'>نمایش</a></div><div style='overflow-wrap: break-word;'><span style='font-weight: bold;'>آدرس : </span>" . $u->address . "</div></div>"];
                }
            } else {
                $map[] = [(float)$u->lat, (float)$u->lng, "<img src='" . $avatar . "' class='leaflet-popup-image'><div class='leaflet-popup-inner'><h3>" . $u->name . "</h3><div style='overflow-wrap: break-word;'><span style='font-weight: bold;'>وب سایت : </span><a target='_blank' rel='nofollow' href='" . $u->website . "'>نمایش</a></div><div style='overflow-wrap: break-word;'><span style='font-weight: bold;'>آدرس : </span>" . $u->address . "</div></div>"];
            }

        }
        return $map;
    }

    
    public function news($title = null)
    {
        if ($title != null) {
            $posts = Post::with('photo')->where('slug', $title)->orderBy('id', 'desc')->first();
            return view('frontend.home.news', compact('posts'));

        }
    }

    public function getSuggestProduct()
    {

        $products = Product::with(['photos', 'brand'])->where('status', '1')->get();
        // return $products;
        foreach ($products as $product) {
            $responce [] = [
                'success' => true,
                'data' => [[
                    'id' => $product->id,
                    'product_name' => $product->title,
                    'name' => $product->title,
                    'price' => $product->price,
                    'sku' => $product->sku,
                    'image' => $product->photos->pluck('thumb')->first(),
                    'url' => '#',
                    'brand' => $product->brand->title
                ]]
            ];
        }
        return response()->json($responce, 200);
    }

    public function registerPopup()
    {
        return response()->json([
            'success' => true,
            'data' => view('auth.registerpopup')->render()
        ]);
    }

    public function cutomerPopup(Request $request)
    {
        $user = User::select('name', 'id', 'phone', 'email', 'company', 'address', 'website')
            ->where("id", $request->userid)
            ->first();

        return response()->json([
            'success' => true,
            'data' => view('auth.customerpopup', compact('user'))->render()
        ]);
    }

    public function getCategory($slug = null)
    {
        return $slug;
    }

    public function getCompanyAddress($username = null)
    {

        $userdata = User::with('avatar')->where('company', $username)->first();
        $products = Product::with('categories')->where('user_id', $userdata->id)->get();
        $categories = Category::whereHas('products', function ($q) use ($products) {
            $q->whereIn('id', $products->pluck('id'));
        })->get();

        return view('frontend.home.users', compact('userdata', 'products', 'categories'));
    }

    public function senterSliderData(Request $request)
    {
        $product = Product::with('categories', 'photos')->whereHas('categories', function ($q) use ($request) {
            $q->whereIn('id', $request);
        })->get();

//        return count($product );
        if (count($product) != 0) {
            return response()->json([
                'success' => true,
                'data' => view('frontend.api.centerSlider', compact('product'))->render()
            ]);
        } else {
            return response()->json([
                'success' => false,
                'data' => "<p class='erorrresult'>محصولی با گروه انتخاب شده یافت نشد</p>"
            ]);
        }

    }

    public function abouteUs()
    {
        return view('frontend.home.aboutus');
    }

    public function contactUs()
    {
        return view('frontend.home.contactus');
    }

    public function cv()
    {
        return view('frontend.home.cv');
    }

    public function term()
    {
        return view('frontend.home.term');
    }

    public function faq()
    {
        return view('frontend.home.faq');
    }
}
