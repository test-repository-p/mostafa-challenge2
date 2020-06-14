@extends('frontend.layout.master')

@section('content')
<script>
    var boxes = '';

</script>

<div class="inner-container">
    <div class="container-fluid full-background">
        <div class="modular-body">
            <div>
                <div class="modular_module ">
                    <div class="general-category-header">
                        <div class="container">
                            <h1>فرصت های شغلی</h1>
                            <ol class="breadcrumb">
                                <li><a>فروشگاه اینترنتی اچ پی کنون سنتر</a></li>
                                <li><a href="{{URL::current()}}">فرصت های شغلی</a></li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>






<div class="container">
    <div class="full-background content-inner">
        <div class="alert-place"></div>
        <div class="row">
            <div class="col-md-7" id="contact-form">
                <div class="info-box-title">
                </div>
                <form id="contactus" enctype="multipart/form-data" action="" method="post" class="DPCOForm form-horizontal group-border-dashed" data-parsley-validate="" novalidate="">
                    <div class="block-flat">
                        <div class="form-group"><label for="name" class="col-sm-2 span2 required">نام</label>
                            <div class="col-sm-10 span10 "><input type="text" name="name" id="name" value="" required="true" class=" form-control" placeholder="نام"></div>
                        </div>
                        <div class="form-group"><label for="family" class="col-sm-2 span2 optional">نام خانوادگی</label>
                            <div class="col-sm-10 span10 "><input type="text" name="family" id="family" value="" class=" form-control" placeholder="نام خانوادگی"></div>
                        </div>
                        <div class="form-group"><label for="phone" class="col-sm-2 span2 optional">شماره تماس</label>
                            <div class="col-sm-10 span10 "><input type="text" name="phone" id="phone" value="" class=" form-control" placeholder="شماره تماس"></div>
                        </div>

                        <div class="form-group"><label for="email" class="col-sm-2 span2 required">ایمیل</label>
                            <div class="col-sm-10 span10 "><input type="text" name="email" id="email" value="" required="true" class=" form-control" placeholder="ایمیل"></div>
                        </div>
                        <div class="form-group"><label for="message" class="col-sm-2 span2 required">توضیحات</label>
                            <div class="col-sm-10 span10 "><textarea name="message" id="message" cols="79" rows="4" required="true" class=" form-control" placeholder="توضیحات"></textarea></div>
                        </div>
                        <div class="form-group">
                            <label for="attachment" class="col-sm-2 span2 optional">رزومه</label>
                            <div class="col-sm-10 span10 ">
                                <input type="file" name="cv">
                                <button type="submit" class="btn green-style pull-left">ارسال رزومه</button>
                            </div>
                        </div>

                    </div>
                </form>
                <br><br>
            </div>
            <div class="col-md-5" id="contact-info">
                <div class="info-box-title">
                    <h3 class="box-label style-3">اطلاعات </h3>
                </div>
                <div id="contact-data-holder">
                    <div class="row">
                        <p>
                           رزومه شما توسط مدیریت ادراری و فنی بررسی خواهد شد و در صورت نیاز با شما تماس گرفته خواهد شد . <br><br>
                            با تشکر از همراهی شما.

                            <div class="justify-content-center">
                                <img src="/uploads/logo.PNG" alt="اچ پی کنون سنتر">
                            </div>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

@endsection
