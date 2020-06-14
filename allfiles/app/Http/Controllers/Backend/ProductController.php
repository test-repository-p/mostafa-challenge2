<?php

namespace App\Http\Controllers\Backend;

use App\Brand;
use App\Product;
use App\Category;
use App\AttributeValue;
use App\Color;
use App\ColorTakhfif;
use Illuminate\Contracts\View\Factory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Product_package;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Illuminate\View\View;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Factory|View
     */
    public function index()
    {
        $products = Product::with(['categories'])->get();
        return view('admin.products.index', compact('products'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Factory|View
     */
    public function create()
    {
        $brands = Brand::all();
        $colors = Color::all();
        // return $brands;
        return view('admin.products.create', compact('brands', 'colors'));
    }

    public function generateSKU()
    {
        $number = mt_rand(10000, 99999);

        if ($this->checkSKU($number)) {
            return $this->generateSKU();
        }
        return (string) $number;
    }

    public function checkSKU($number)
    {
        return Product::where('sku', $number)->exists();
    }

    public function makeSlug($string)
    {
        $string = strtolower($string);
        $string = str_replace(['؟', '?'], '', $string);
        return preg_replace('/\s+/u', '-', trim($string));
    }

    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return
     */
    public function store(Request $request)
    {

        $now = Carbon::now();
        $newproduct = new Product();
        $newproduct->title = $request->title;
        $newproduct->slug = $this->makeSlug($request->title);
        $newproduct->sku = $this->generateSKU();
        $newproduct->status = $request->status;
        $newproduct->price = $request->price;
        $newproduct->discount_price = $request->price_discount;
        $newproduct->description = $request->description;
        $newproduct->brand_id = $request->brand;
        $newproduct->meta_title = $request->meta_title;
        $newproduct->meta_desc = $request->meta_desc;
        $newproduct->meta_keywords = $request->meta_keywords;
        if (Auth::check()) {
            $newproduct->user_id = Auth::user()->id;
        } else {
            $newproduct->user_id = 1;
        }

        $newproduct->save();
        $attribute = explode(',', $request->input('attributes')[0]);
        $photos = explode(',', $request->input('photo_id')[0]);
        $newproduct->categories()->sync($request->categories);
        $newproduct->attributeValues()->sync($attribute);
        $newproduct->photos()->sync($photos);


        /*
        *  Save ColorModel data
        *
        */

        if (isset($request['colormodel'])) {
            $packeage = [];
            foreach ($request['colormodel'] as $packeage) {
                if (isset($packeage['amount'])) {
                    $packeagedata[] = [
                        'amount' => $packeage['amount'],
                        'colorid' => $packeage['colorid'],
                        'modelid' => $packeage['modelid'],
                        'product_id' => $newproduct->id,
                        'created_at' => $now,
                        'updated_at' => $now,
                    ];
                }
            }
            if (count($packeage)) {
                DB::table('product_packages')->insert($packeagedata);
            }
        }

        if (isset($request['color_baste'])) {
            $colortakhfif = [];
            foreach ($request['color_baste'] as $takhfifBaste) {
                if (isset($takhfifBaste['descount'])) {
                    $colortakhfif[] = [
                        'color_title' => $takhfifBaste['name'],
                        'color_value' => $takhfifBaste['value'],
                        'color_id' => '',
                        'discount' => $takhfifBaste['descount'],
                        'product_id' => $newproduct->id,
                        'created_at' => $now,
                        'updated_at' => $now,
                    ];
                }
            }

            if (count($colortakhfif)) {
                DB::table('color_takhfifs')->insert($colortakhfif);
                // $color = ColorTakhfif::create($colortakhfif);
            }
        }


        if (isset($request['model_baste'])) {
            $colortakhfif = [];
            foreach ($request['model_baste'] as $takhfifBaste) {
                if (isset($takhfifBaste['descount'])) {
                    $colortakhfif[] = [
                        'model_title' => $takhfifBaste['name'],
                        'model_value' => $takhfifBaste['value'],
                        'model_id' => '',
                        'discount' => $takhfifBaste['descount'],
                        'product_id' => $newproduct->id,
                        'created_at' => $now,
                        'updated_at' => $now,
                    ];
                }
            }

            if (count($colortakhfif)) {
                DB::table('model_takhfifs')->insert($colortakhfif);
                // $color = ColorTakhfif::create($colortakhfif);
            }
        }

        Session::flash('success', 'محصول مورد نظر با موفقت درج شد.');
        return redirect(route('products.index'));
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {

        $brands = Brand::all();
        $colors = Color::all();
        $product = Product::with('attributeValues', 'categories', 'brand', 'photos')->whereId($id)->first();
//                return $product;
        return view('admin.products.edit', compact('colors','product', 'brands'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $now = Carbon::now();
        if (isset($request['colormodel'])) {
            $packeage = [];
            foreach ($request['colormodel'] as $packeage) {
                if (isset($packeage['amount'])) {
                    $packeagedata[] = [
                        'amount' => $packeage['amount'],
                        'colorid' => $packeage['colorid'],
                        'modelid' => $packeage['modelid'],
                        'product_id' => $id,
                        'created_at' => $now,
                        'updated_at' => $now,
                    ];
                }
            }
            if (count($packeage)) {
                return $packeagedata;
                DB::table('product_packages')->insert($packeagedata);

            }
        }
        //    return $request->all();
        $product = Product::findOrFail($id);

        $product->title = $request->title;
        $product->slug = $this->makeSlug($request->title);
        $product->sku = $this->generateSKU();
        $product->status = $request->status;
        $product->price = $request->price;
        $product->discount_price = $request->price_discount;
        $product->description = $request->description;
        $product->brand_id = $request->brand;
        $product->meta_title = $request->meta_title;
        $product->meta_desc = $request->meta_desc;
        $product->meta_keywords = $request->meta_keywords;
        if (Auth::check()) {
            $product->user_id = Auth::user()->id;
        } else {
            $product->user_id = 1;
        }

        $product->save();

        //DELETE OLD Attributes
        $affected = DB::delete('delete from attributeValue_product where product_id = ?', [$id]);


        $attribute = explode(',', $request->input('attributes')[0]);
        $photos = explode(',', $request->input('photo_id')[0]);
        $product->categories()->sync($request->categories);
        $product->attributeValues()->attach($attribute);
        $product->photos()->sync($photos);

        Session::flash('success', 'محصول مورد نظر با موفقت ویرایش شد.');
        return redirect(route('products.index'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $product = Product::findOrFail($id);
        $product->delete();

        Session::flash('success', 'محصول مورد نظر با موفقت حذف شد.');
        return redirect(route('products.index'));
    }

    public function getProductPackage($product_id){
        
        
        $colors = DB::table('product_packages')
        ->select('colors.name as cname','colors.id as cid','product_packages.*')
        ->join('colors','colors.id','colorid')
        ->where('product_id',$product_id)
        ->distinct('colors.name')->get();
        
        return ($colors);
    }


    public function getmodel($colorid,$product_id){
        
        $model = DB::table('product_packages')
        ->select('product_models.name as mname','product_models.id as mid')
        ->join('product_models','product_models.id','product_packages.modelid')
        ->where('product_id',$product_id)
        ->where('colorid',$colorid)
        ->get();
        
        return ($model);
    }


    public function getModelPrice($colorid,$modelid,$product_id){
        
        $model = DB::table('product_packages')
        ->select('amount')
        ->where('product_id',$product_id)
        ->where('colorid',$colorid)
        ->where('modelid',$modelid)
        ->pluck('amount');
        
        return ($model);
    }
}
