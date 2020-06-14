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
                            <h1>تماس با ما</h1>
                            <ol class="breadcrumb">
                                <li><a>فروشگاه اینترنتی اچ پی کنون سنتر</a></li>
                                <li><a href="{{URL::current()}}">تماس با ما</a></li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>






<div class="container">
    <div class="full-background container-fluid content-inner">
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
                        <div class="form-group"><label for="company" class="col-sm-2 span2 optional">نام شرکت</label>
                            <div class="col-sm-10 span10 "><input type="text" name="company" id="company" value="" class=" form-control" placeholder="نام شرکت"></div>
                        </div>
                        <div class="form-group"><label for="email" class="col-sm-2 span2 required">ایمیل</label>
                            <div class="col-sm-10 span10 "><input type="text" name="email" id="email" value="" required="true" class=" form-control" placeholder="ایمیل"></div>
                        </div>
                        <div class="form-group"><label for="message" class="col-sm-2 span2 required">پیغام</label>
                            <div class="col-sm-10 span10 "><textarea name="message" id="message" cols="79" rows="4" required="true" class=" form-control" placeholder="پیغام"></textarea></div>
                        </div>
                        <div class="form-group">
                            <label for="attachment" class="col-sm-2 span2 optional">پیوست</label>
                            <div class="col-sm-10 span10 ">
                                <input type="hidden" name="MAX_FILE_SIZE" value="67108864" id="MAX_FILE_SIZE">
                                <div class="fileinput fileinput-new" data-provides="fileinput"><span class="btn btn-default btn-file">
                                        <span class="fileinput-new">انتخاب فایل</span>
                                        <span class="fileinput-exists">تغییر</span>
                                        <input type="file" data-provides="fileinput" name="attachment" id="attachment" class=" form-control" placeholder="پیوست"></span>
                                    <span class="fileinput-filename tahoma"></span>
                                    <a href="#" class="close fileinput-exists" data-dismiss="fileinput" style="float: none">×</a></div>
                                <a class="btn green-style pull-left" onclick="customesubmit()">ارسال پیام</a>

                            </div>
                        </div>

                    </div>
                </form>
                <br><br>
            </div>
            <div class="col-md-5" id="contact-info">
                <div class="info-box-title">
                    <h3 class="box-label style-3">اطلاعات تماس</h3>
                </div>
                <div id="contact-data-holder">
                    <div class="row">
                        <div class="col-md-2">آدرس:</div>
                        <div class="col-md-10">میرداماد-خیابان </div>
                    </div>
                    <div class="row">
                        <div class="col-md-2">تلفکس:</div>
                        <div class="col-md-10">61925</div>
                    </div>
                    <div class="row">
                        <div class="col-md-2">ایمیل:</div>
                        <div class="col-md-10">info[AT]hpcanoncenter.com</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

@endsection
