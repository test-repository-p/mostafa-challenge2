<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml" dir="rtl" lang="fa">

<head>
    <title> {{$userdata->name}} </title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <script type="text/javascript" src="https://s1.mediaad.org/serve/9694/retargeting.js"></script>
    <link rel="manifest" href="/manifest.json" />
    <link rel="canonical" href="{{  URL::current() }}" />
    <meta name="robots" content="index, follow" />
    <meta name="description" content="{{$userdata->name}}" />
    <meta name="keywords" content="{{$userdata->name}}" />
    <meta property="og:title" content="{{$userdata->name}}" />
    <meta property="og:description"   content="" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="{{ Request::root() }}{{$userdata->avatar->path}}" />
    <meta property="og:site_title" content="{{$userdata->name}}" />
    <meta property="og:url" content="{{  URL::current() }}" />
    <meta property="og:locale" content="fa-IR" />
    <link href="{{ Request::root() }}/uploads/favicon.ico?v=3" rel="shortcut icon" type="image/x-icon" />
    <link href="/uploads/a6d2824e6f63628e4b39d3e3ebaef875.css?t=1571128355" media="screen" rel="stylesheet" type="text/css" />
	<link rel="stylesheet" href="/assets/css/main.css" type="text/css">
    <script type="text/javascript" src="/uploads/cbf0a4972355e659813aa941298444fd.js?t=1571128356"></script>
    <script type="text/javascript" src="/uploads/5f02ac1e0b2a5214bdb9b2e5dfcecbc5.js?t=1571128359"></script>
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
                                    <h1></h1>
                                    <ol class="breadcrumb">
                                        <li><a>فروشگاه اینترنتی مبل آباد</a></li>
                                        <li><a href=""></a></li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>


                    <!-- <div class="container">
                        <div class="modular_module ">
                            <div class=" supplier-owl-container">
                                <div class="row">
                                    <div class="col-sm-3">
                                        <p>انتخاب تامین کننده</p>
                                    </div>
                                    <div class="col-sm-9">
                                        <div class="owl-carousel supplier-owl-carousel">
                                            <div class="supplier-logo-holder">
                                                <a data-container="body" data-toggle="tooltip" title="صنایع نظری"
                                                    href="#">
                                                    <img src="/uploads/x-30-NAZ.jpg" alt="" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> -->



                    <div class="head-shop">
                        <div itemscope="itemscope" itemtype="http://schema.org/ClothingStore" class="pb-10">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-9">
                                        <div class="row">
                                            <div class="col-md-2 center">
                                                <img itemprop="logo"
                                                    src="{{$userdata->avatar->path}}" alt="{{$userdata->name}}"
                                                    class="logoSellerPage_desktop dd"> <img itemprop="image"
                                                    src="{{$userdata->avatar->path}}" alt="{{$userdata->name}}"
                                                    class="hidden">
                                                </div>
                                            <div class="col-md-10">
                                                <div class="row pr-20">
                                                    <div class="col-md-12">
                                                        <div class="name-fl-con">
                                                            <h1 itemprop="name" class="name-page-2 right shop-name-des doted col-xs-12 col-md-5">
                                                                {{$userdata->name}}
                                                            </h1>
                                                            <a href="#sellersContactInfo" title="اطلاعات تماس" data-user="{{$userdata->id}}"
                                                                         data-toggle="modal" data-target="#sellersContactInfo"
                                                                class="customer-trigger btn-contact-shop center col-xs-12 col-md-4" style="color:white;z-index: 99;"><span>اطلاعات تماس فروشنده</span>
                                                            </a>
                                                        </div>
                                                    <p class="shop-in-location col-md-12">واقع در {{$userdata->address}}</p>
                                                    </div>
                                                    <div class="col-md-12 mt-30 hidden">
                                                        <div class="row">
                                                            <div class="col-md-4"><span class="num-cunt">123</span> <span
                                                                    class="text-cunt">محصول</span></div>
                                                            <div class="col-md-4"><span class="num-cunt">456</span> <span
                                                                    class="text-cunt">کالکشن</span></div>
                                                            <div class="col-md-4"><span class="num-cunt">15</span> <span
                                                                    class="text-cunt">تخفیف دار</span></div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="description">
                                                            <p>تولید و پخش انواع پوشاک زنانه؛ شومیز، بلوز، تونیک، مجلسی و...</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="row">
                                            <div class="col-xs-12">
                                                <div class="medal-box">
                                                    <div class="ml-10"><img src="https://botick.com/theme/img/vip-medal.png" width="154"
                                                            height="76" alt="Vip" class="medal-vp-img"></div>
                                                    <div class="line-height-20">
                                                        <div><span class="medal-title medal-vip">سطح فروشگاه: Vip</span></div>
                                                        <div><span class="medal-date">فعالیت از
                                                                1 سال و
                                                                6
                                                                ماه پیش</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xs-12">
                                                <div class="row">
                                                    <div class="col-md-12 bt-1">
                                                        <div class="mt-10">
                                                            <div class="col-xs-6 col-md-8"><span><i aria-hidden="true" class="fa fa-male ml-15 fa-lg"
                                                                        style="color: rgb(85, 85, 85);"></i>
                                                                    خرید حضوری
                                                                </span> </div>
                                                            <div class="col-md-4"><span style="font-weight: bold;"><i
                                                                        class="fa fa-check-circle c-green mr-10 ml-5"></i>دارد</span></div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <div>
                                                            <div class="col-xs-6 col-md-8">
                                                                <span>
                                                                    <i aria-hidden="true" class="fa fa-truck ml-15 fa-lg"
                                                                        style="color: rgb(85, 85, 85);"></i>ارسال به سراسر کشور</span>
                                                            </div>
                                                            <div class="col-md-4">
                                                                <span style="font-weight: bold;">
                                                                    <i class="fa fa-check-circle c-green  mr-10 ml-5"></i>دارد
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>







                    <div class="container">
                        <div class="row flex-row">



                            <div class="col-sm-3">
                                <div class="modular_module ">
                                    <div class="side-bar-product-list sidebar-fix-holder mCustomScrollbar _mCS_1 mCS-autoHide mCS-dir-rtl"
                                        style="position: relative; overflow: visible;">
                                        <div id="" class="mCustomScrollBox mCS-dark mCSB_vertical mCSB_outside"
                                            tabindex="0">
                                            <div id="" class="mCSB_container">
                                                <div class="searching-section">
                                                    <div class="searching">
                                                        <div class="info-box-title">
                                                            <div class="box-label style-2">
                                                                <a class="accordion-toggle" style="text-align:center">
                                                                    دسته بندی‌ های این فروشنده
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div id="category_list_301" class="panel-group collapse in">
                                                            <ul class="content-list has-cat product-cat-list">

                                                                <li>
                                                                    <ul>
                                                                        @foreach($categories as $cat)

                                                                        <li class="subcat subcatnochild ">
                                                                            <a class="custome-selected"
                                                                                href="{{$cat->slug}}"
                                                                                title="{{$cat->name}}">
                                                                                <i class="fa fa-chevron-left category-indicator"
                                                                                    aria-hidden="true">
                                                                                </i>

                                                                                {{$cat->name}}
                                                                            </a>
                                                                        </li>

                                                                        @endforeach



                                                                    </ul>
                                                                </li>
                                                                {{--<li>--}}
                                                                {{--<a class="selected-cat" href="#" title="مبل اداری">--}}
                                                                {{--مبل اداری--}}
                                                                {{--<i class="fa fa-chevron-left " aria-hidden="true"></i>--}}
                                                                {{--</a>--}}
                                                                {{--</li>--}}


                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>






                            <div class="col-md-9">

                                <div class="product-box">
                                    <div class="wrapper">
                                        <div class="boxlist">
                                            <div class="item row" id="product_box_306">



                                                @foreach ($products as $product)
                                                <div class="col-sm-3 col-xs-6 one-product-box-wrapper">
                                                    <div class="one-product-box OLDwith-discount">
                                                        {{-- <div style="    background: #ff2d56;
                                                                color: white;
                                                            text-align: center;
                                                            display: inline-block;
                                                            padding: 6px;
                                                            font-size: 12px;
                                                            position: absolute;
                                                            top: 10px;
                                                            left: 10px;">%20 تخفیف</div> --}}
                                                    <a href="/product/{{$product->slug}}" title="{{$product->title}} ">
                                                        <img alt="{{$product->title}}" data-src="{{$product->photos[0]->thumb}}" src="/uploads/266-266-default.png" />
                                                        </a>
                                                        <div class="product-title-bar">
                                                            <div class="checkbox"></div>
                                                            <div class="product-title">
                                                                <a class="product-link" title="{{$product->title}}" href="/product/{{$product->slug}}"> {{$product->title}} -  {{$product->id}} </a>
                                                            </div>
                                                        </div>
                                                        <div class="show-price">
                                                           @if ($product->discount_price)
                                                           <span class="old-price">
                                                                {{$product->discount_price}} تومان
                                                            </span>
                                                           @endif
                                                                 <span class="new-price"> {{$product->price}} تومان</span>
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





                </div>










            </div>




        </div>


        @include('layouts.footer')

    </div>



    <style>
        relative {
            position: relative !important;
        }

        .w-100 {
            width: 100% !important;
        }

        .mt-25 {
            margin-top: 25px !important;
        }

        .mt-25 {
            margin-top: 25px !important;
        }

        .text_On_Image_superCategory {
            position: absolute;
            font-size: 23px;
            font-weight: 700;
            color: #fff;
            z-index: 1;
            text-shadow: 2px 3px 1px rgba(0, 0, 0, .53), -1px -1px 0 #000, 1px -1px 0 rgba(0, 0, 0, .98), -1px 1px 0 rgba(0, 0, 0, .81), 1px 1px 0 rgba(0, 0, 0, .62);
            background: rgba(255, 255, 255, 0);
            background: -moz-linear-gradient(left, rgba(255, 255, 255, 0) 0, rgba(246, 246, 246, .34) 47%, rgba(255, 255, 255, .72) 100%);
            background: -webkit-gradient(left top, right top, color-stop(0, rgba(255, 255, 255, 0)), color-stop(47%, rgba(246, 246, 246, .34)), color-stop(100%, rgba(255, 255, 255, .72)));
            background: -webkit-linear-gradient(left, rgba(255, 255, 255, 0) 0, rgba(246, 246, 246, .34) 47%, rgba(255, 255, 255, .72) 100%);
            background: -o-linear-gradient(left, rgba(255, 255, 255, 0) 0, rgba(246, 246, 246, .34) 47%, rgba(255, 255, 255, .72) 100%);
            background: -ms-linear-gradient(left, rgba(255, 255, 255, 0) 0, rgba(246, 246, 246, .34) 47%, rgba(255, 255, 255, .72) 100%);
            background: linear-gradient(to right, rgba(255, 255, 255, 0) 0, rgba(246, 246, 246, .34) 47%, rgba(255, 255, 255, .72) 100%);
            top: 11px;
            right: 0;
            padding-right: 16px;
            padding-top: 10px;
            padding-bottom: 10px;
            padding-left: 40px;
        }
        .relative a img {
            border-radius: 2%;
        }
        .relative a img:hover {
            transform: scale(1.05);
        }
        .relative a img {
            transition: 0.3s ease;
        }

.logoSellerPage_desktop {
    width: 150px;
    height: 150px;
    border-radius: 100%;
    border: 1px solid #ddd;
    margin-top: 30px;
}
.shop-name-des {
    font-weight: 600;
    font-size: 18px;
    margin-top: 8px;
    margin-bottom: 0;
    margin-left: 60px;
}
.doted {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.right {
    float: right !important;
}
.name-fl-con {
    margin-top: 60px;
}
.pr-20 {
    padding-right: 20px;
}
.shop-in-location {
    font-size: 12px;
    font-weight: 500;
    margin-top: 18px;
    color: #8d8d8d;
}
.description {
    color: #555;
    text-align: justify;
    /* border-top: 1px solid #f1f1f1; */
    /* margin-top: 10px; */
    padding-top: 20px;
}
.btn-contact-shop {
    background: #f7661f;
    color: #fff;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 500;
    padding: 5px 30px !important;
    /* margin-right: 15px; */
}
.center {
    text-align: center;
}
.medal-box {
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    align-content: stretch;
    margin-top: 15px;
    text-align: right;
    /* background: #f8f8f8; */
    padding: 15px 0px;
    /* border-radius: 10px; */
    /* border: 1px solid #ebebeb; */
}
.ml-10 {
    margin-left: 10px !important;
}
.mt-10 {
    margin-top: 10px !important;
}
.medal-vp-img {
    width: 30px;
    height: auto;
}
.medal-title {
    font-size: 16px;
    font-weight: 600;
}

.medal-vip {
    color: #e65c00;
}
.bt-1 {
    border-top: 1px solid #b3a4a4;
}
.col-md-8 span {
    font-size: 13px;
}
.medal-date {
    font-size: 11px;
    color: #1792d5;
}
.fa-lg {
    font-size: 1.33333333em;
    line-height: .75em;
    vertical-align: -15%;
}
.in-location {
    font-size: 10px;
    color: #939393;
}
.c-green {
    color: #428d06;
}
.mr-10 {
    margin-right: 10px !important;
}
.ml-5 {
    margin-left: 5px !important;
}
.ml-15 {
    margin-left: 15px !important;
}
.pb-10 {
    background-color: #eaeaea;
    margin-bottom: 14px;
    padding-bottom: 10px;
}
.main-logo {
    text-align: center;
}

@media only screen and (max-width: 600px) {
    .name-page-2  {
         margin-bottom: 10px;
    }
    .pr-20 {
         padding-right: 0px;
    }
    .name-fl-con {
        margin-top: 0px;
    }
}

.one-product-box-wrapper .one-product-box {
	margin: 0px 0 !important;
}
.one-product-box-wrapper {
	margin: 0px 0 !important;
}
.inputcolor {
	background-color: #eee;
	padding: 8px;
	border: ;
	border-radius: 3px;
	border-color: ;
	border: 1px solid #ccc;
}

    </style>
</body>

</html>
