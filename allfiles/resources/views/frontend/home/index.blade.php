@extends('frontend.layout.master')

@section('content')


@error('email')
<div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-body" style="min-height: auto;">
                <strong>{{ $message }}</strong>
            </div>
        </div>
    </div>
</div>
<script>
    $('#myModal').modal('show');

</script>
@enderror


@if (session('notactive'))
<div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">تایید ایمیل</h4>
            </div>
            <div class="modal-body" style="min-height: auto;">
                <p>{{ session('notactive') }}</p>
            </div>
        </div>
    </div>
</div>
<script>
    $('#myModal').modal('show');

</script>
@endif

<!--Slider-->
@include('layouts.slider')


<!--   <div class="container">
        <a href="#">
            <img class="img-responsive" src="/uploads/MoblAbad.gif"
                 alt="بنر اقساطی جدید"/>
        </a>
    </div>-->


{{-- دسته بندی محصولات  --}}
@include('layouts.categorysection')



{{-- آخرین محصولات --}}
@include('layouts.descountseller')



{{-- جدیدترین مطالب --}}
@include('layouts.latestnews')


{{-- جدیدترین محصولات --}}
<section class="section section-secondary section-no-border m-0" style="direction: rtl;">
    <div class="container">
        <div class="row justify-content-center text-center">
            <div class="col-lg-3 col-sm-8 mb-4 mb-lg-0">
                <img src="uploads/support.png" alt="" class="img-repsonsive">
                <h2 class="font-weight-bold text-color-light mb-30">پشتیبانی بی وقفه</h2>
                <p class="custom-text-color-2">۲۴ ساعته ۷ روز هفته</p>
            </div>
            <div class="col-lg-3 col-sm-8 mb-4 mb-lg-0">
                <img src="uploads/payment.png" alt="" class="img-repsonsive">
                <h2 class="font-weight-bold text-color-light mb-30">پرداخت در محل</h2>
                <p class="custom-text-color-2">ویژه شهر تهران</p>
            </div>
            <div class="col-lg-3 col-sm-8">
                <img src="uploads/Guarantee.png" alt="" class="img-repsonsive">
                <h2 class="font-weight-bold text-color-light mb-30">ضمانت کامل</h2>
                <p class="custom-text-color-2">برای اصالت کالاها</p>
            </div>
            <div class="col-lg-3 col-sm-8">
                <img src="uploads/delivery.png" alt="" class="img-repsonsive">
                <h2 class="font-weight-bold text-color-light mb-30">ارسال سریع و رایگان</h2>
                <p class="custom-text-color-2">برای محصولات منتخب</p>
            </div>
        </div>
    </div>
</section>















<div class="mainpop">
    <div>
        <img class="img-circle img-responsive" src="/uploads/logo-192*192.png">
        <div class="textdata">
            <p style="text-align: center;font-weight: bold;color: #353434;">وب اپلیکیشن <span style="color: darkred">مبل آباد</span> را به صفحه اصلی خود اضافه کنید.</p>
            <hr>
            <div class="headline">
                <span><i class="fa fa-apple" aria-hidden="true"></i> IPHONE </span>
            </div>

            <p>1 - در نوار پایین دکمه <img style="width: 15px" src="/uploads/iphoneshare.png"> <strong>"Share"</strong> را انتخاب نمایید .</p><br>
            <p>2 - در منوی باز شده گزینه <i class="fa fa-plus-square" aria-hidden="true"></i> <strong>"Add to Home Screen"</strong> را انتخاب نمایید.</p><br>
            {{-- <button id="btnsetcook" style="width: 100%" class="btn btn-danger">متوجه شدم!</button>--}}
            {{-- <button id="delbtnsetcook" style="width: 100%" class="btn btn-danger">متوجه 2222شدم!</button>--}}

            <hr>
            <div class="headline">
                <span><i class="fa fa-android" aria-hidden="true"></i> ANDROID </span>
            </div>

            <p>1 - در نوار بالا دکمه <img style="width: 19px" src="/uploads/chromesetting.png"> <strong>"Setting"</strong> را انتخاب نمایید .</p><br>
            <p>2 - در منوی باز شده گزینه <strong>"Add to Home Screen"</strong> را انتخاب نمایید.</p><br>
            <button id="btnsetcook" style="width: 100%" class="btn btn-danger">متوجه شدم!</button>
            {{-- <button id="delbtnsetcook" style="width: 100%" class="btn btn-danger">متوجه 2222شدم!</button>--}}

        </div>
    </div>
</div>





<style>
    .headline {
        padding-bottom: 7px;
        color: #262424;
        /* text-align: center !important; */
        font-weight: bold;
    }

    .headline span {
        border-bottom: 1px solid #dbdbdb !important;
    }

    .textdata {
        border: 1px solid #e1e1e1;
        padding: 11px;
        background-color: white;
    }

    .textdata .fa.fa-plus-square {
        font-size: 17px;
    }

    .textdata strong {
        font-weight: bold;
        color: black;
    }

    .img-circle.img-responsive {
        text-align: center;
        margin: auto;
        height: 74px;
    }

    .mainpop div {
        width: 97%;
        margin: auto;
        text-align: justify;
    }

    .mainpop {
        width: 100%;
        height: 2000px;
        position: absolute;
        z-index: 100000000000000;
        top: 0;
        background-color: #eee;
        display: none;
    }

</style>
@endsection
