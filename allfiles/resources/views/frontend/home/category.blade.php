<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml" dir="rtl" lang="fa">

<head>
    <title> {{$category->name}} - اچ پی کنون سنتر </title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <script type="text/javascript" src="https://s1.mediaad.org/serve/9694/retargeting.js"></script>
    <link rel="manifest" href="/manifest.json" />
    <link rel="canonical" href="{{  URL::current() }}" />
    <meta name="robots" content="index, follow" />
    <meta name="description" content="{{$category->name}}" />
    <meta name="keywords" content="{{$category->name}}" />
    <meta property="og:title" content="{{$category->name}} - اچ پی کنون سنتر" />
    <meta property="og:description" content="{{$category->name}}" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="{{ Request::root() }}{{$category->pic}}" />
    <meta property="og:site_title" content="{{$category->name}}" />
    <meta property="og:url" content="{{  URL::current() }}" />
    <meta property="og:locale" content="fa-IR" />
    <link href="{{ Request::root() }}/uploads/favicon.ico?v=333" rel="shortcut icon" type="image/x-icon" />
    <link href="{{ Request::root() }}/uploads/a6d2824e6f63628e4b39d3e3ebaef875.css?t=1571128355" media="screen" rel="stylesheet" type="text/css" />
    <link href="/uploads/5fce64e6c77eb5a78a74a03db9832e01.css?t=1558157186" media="screen" rel="stylesheet" type="text/css" />
    <script type="text/javascript" src="/uploads/dd10e21830cdf34287a91b091223908f.js?t=1551428079"></script>
    <script type="text/javascript" src="/uploads/3578060c2c3fee1a31d85366bab7a6ee.js?t=1542109726"></script>
    <link rel="stylesheet" href="/assets/css/normalize.css" type="text/css">
    <link rel="stylesheet" href="/assets/css/vazir.css" type="text/css">
    <link rel="stylesheet" href="/assets/css/main.css" type="text/css">
    <script>
        var boxes = [];
        var LeafIcon = "";

    </script>
</head>

<body style="overflow-x: hidden" class="is-not-login rtl product route product-route">
    <div class="container-fluid maincont">
        <div id="dark"></div>
        <div class="header-2018">
            @include('layouts.header')
        </div>


        <div class="inner-container">
            <div class="container-fluid full-background">
                <div class="modular-body">
                    <div>
                        <div class="modular_module ">
                            <div class="general-category-header">
                                <div class="container">
                                    <h1>{{$category->name}}</h1>
                                    <ol class="breadcrumb">
                                        <li><a>فروشگاه اینترنتی اچ پی کنون سنتر</a></li>
                                        <li><a href="">{{$category->name}}</a></li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div class="container">
                        <div class="row flex-row">




                            <div class="col-md-12">
                                <article>
                                    <div class="box p-md">
                                        {!!$category->des!!}
                                    </div>
                                </article>




                                <section class="row">
                                    @foreach($categories as $cat)
                                    @if(count($cat->childrenRecursive) > 0)
                                    @foreach($cat->childrenRecursive as $cat2)
                                    <div class="col-md-4">
                                        <div class="mt-25">
                                            <div class="relative">
                                                <a href="/category/{{$cat2->slug}}" title="{{$cat2->name}}">
                                                    <span class="text_On_Image_superCategory">{{$cat2->name}}</span>
                                                    <img class="img-responsive w-100 hover-img" src="{{$cat2->pic}}" alt="{{$cat2->name}}">
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    @endforeach
                                    @endif
                                    @endforeach
                                </section>
                            </div>




                        </div>
                    </div>





                </div>




                @if (count($relatedproduct) != 0)

                <div class="container-fluid inner-desc-container">
                    <div class="container">
                        <div class="modular_module ">
                            <div class="caption">
                                <div class="title-box">
                                    <h4> محصولات گروه {{$category->name}}</h4>
                                </div>
                                <p></p>
                            </div>
                            <div class="product-box">
                                <div class="wrapper">
                                    <div class="boxlist">
                                        <div class="item row" id="product_box_306">



                                            @foreach ($relatedproduct as $product)
                                            <div class="col-sm-3 col-xs-6 one-product-box-wrapper">
                                                <div class="one-product-box OLDwith-discount">
                                                    <a href="/product/{{$product->slug}}" title="{{$product->title}}">
                                                        <img alt="{{$product->title}}" data-src="{{(count($product->photos)) ? $product->photos[0]->thumb : '' }}" src="/uploads/266-266-default.png" />
                                                    </a>
                                                    <div class="product-title-bar">
                                                        <div class="product-title">
                                                            <a class="product-link" title="{{$product->title}}" href="/product/{{$product->slug}}"> {{$product->title}} </a>
                                                        </div>
                                                    </div>
                                                    <div class="show-price">
                                                        <span class="discount">{{$product->discount_price}} % </span>
                                                        <span class="new-price"> {{number_format(($product->price - ($product->price * $product->discount_price) / 100))}} تومان </span>
                                                    </div>
                                                </div>
                                            </div>
                                            @endforeach




                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                @endif
            </div>
        </div>
        @include('layouts.footer')
    </div>
    <script src="/assets/js/main.js" type="text/javascript"></script>
</body>
</html>
