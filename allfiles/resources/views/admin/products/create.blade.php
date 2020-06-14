@extends('admin.layout.master')

@section('styles')
<link rel="stylesheet" href="/admin/dist/css/dropzone.css">
@endsection

@section('content')

<link rel="stylesheet" href="/admin/plugins/datatables/dataTables.bootstrap.css">
@include('admin.partial.form-error')



<section class="content" id="app">
    <div class="box">
        <div class="box-header">
            <h4 class="box-title pull-right">ایجاد محصول جدید</h4>
        </div>
        <div class="box-body">
            <div class="row">
                <div class="col-md-8 col-md-offset-2">


                    <form action="{{route('products.store')}}" method="post">
                        @csrf

                        <div class="form-group">
                            <label for="title">نام محصول :</label>
                            <input name="title" class="form-control" placeholder="نام محصول را وارد نمایید..." type="text" value="{{old("title")}}">
                        </div>

                        <div class="form-group">
                            <label for="slug">نام مستعار :</label>
                            <input name="slug" class="form-control" placeholder="نام مستعار را وارد نمایید..." type="text" value="{{old("slug")}}">
                        </div>

                        <attribute-component :brands="{{$brands}}"></attribute-component>

                        <div class="form-group">
                            <label for="status">وضعیت نشر :</label>
                            <input type="radio" style="vertical-align: middle;" name="status" value="0" checked> <span> منتشر نشده </span>
                            <input type="radio" style="vertical-align: middle;" name="status" value="1"> <span> منتشر شده </span>
                        </div>

                        <div class="form-group">
                            <label for="price">قیمت :</label>
                            <input name="price" class="form-control" placeholder="قیمت محصول را وارد نمایید..." type="number" value="{{old("price")}}">
                        </div>


                        <div class="form-group">
                            <label for="price_discount"> درصد تخفیف :</label>
                            <input name="price_discount" class="form-control" placeholder="مثال :  5 " type="text" maxlength="2" value="{{old("price_discount")}}">
                        </div>


                        <div class="form-group">
                            <label for="description">توضیحات :</label>
                            <textarea id="textAreaDes" name="description" class="form-control">{{old("description")}}</textarea>
                        </div>


                        <div class="form-group">
                            <label for="meta_title">عنوان SEO را وارد نمایید :</label>
                            <input name="meta_title" class="form-control" placeholder="عنوان SEO" type="text">
                        </div>

                        <div class="form-group">
                            <label for="meta_desc">توضیحات SEO را وارد نمایید :</label>
                            <input name="meta_desc" class="form-control" placeholder="توضیحات SEO" type="text">
                        </div>

                        <div class="form-group">
                            <label for="meta_keywords">کلمات کلیدی SEO را وارد نمایید. :</label>
                            <input name="meta_keywords" class="form-control" placeholder="کلمات کلیدی SEO" type="text">
                        </div>



                        <!--  Custom Form for Hpcanon  -->
                        <hr>
                        <div class="form-group row">
                            <div class="col-md-6">
                                <label for="droppdowncolors">انتخاب رنگ</label>
                                <select id="droppdowncolors" name="droppdowncolors" name="droppdowncolors" class="form-control">
                                    <option value="0">انتخاب رنگ ...</option>
                                    @foreach($colors as $color)
                                    <option value="{{ $color->id }}"> {{ $color->name }} </option>
                                    @endforeach
                                </select>

                            </div>


                            <div class="col-md-6">
                                <label for="droppdownmodel">انتخاب مدل</label>
                                <select id="droppdownmodel" name="droppdownmodel" name="droppdownbrand" class="form-control">
                                    <option value="0">انتخاب مدل ...</option>
                                    <option value="1">Orginal</option>
                                    <option value="2">Grage A</option>
                                    <option value="3">چینی</option>
                                    <option value="4">ایرانی</option>

                                </select>
                            </div>
                        </div>


                        <div class="form-group row">
                            <div class="col-md-12">
                                <label style="color:red" for="meta_keywords">**** لطفا بعد از انتخاب رنگ و برند .</label>
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-md-12">
                                <button type="button" id="addColor" class="btn btn-warning"> اضافه کن <i class="fa fa-plus"></i></button>
                            </div>
                        </div>

                        <div id="allcolormodeldata" class="form-group "></div>
                        <hr>

                        <!-- END  Custom Form for Hpcanon  -->



                        <!-- WHEN I USE DATA OF COLOR 

                        <div class="form-group">
                            <div>
                                <label for="colors"> انتخاب رنگ : </label>
                                <select style="height:200px !important;" id="colors" name="colors[]" class="form-control" size="7" multiple>
                                    <option value="1">بسته تک جفتی</option>
                                    <option value="2">بسته 3 عددی</option>
                                    <option value="3">بسته 3 جفتی</option>
                                </select>
                            </div>
                            <div class="row" style="margin-top: 5px;">
                                <div class="col-md-2">
                                    <button type="button" id="computing" class="btn btn-primary"> محاسبه</button>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12" id="colorNumberOff"></div>
                            </div>
                        </div>


                        <div class="form-group">
                            <div>
                                <label for="model"> انتخاب مدل : </label>
                                <select style="height:200px !important;" id="model" name="model[]" class="form-control" size="7" multiple>
                                    <option value="1">مدل تک جفتی</option>
                                    <option value="2">مدل 3 عددی</option>
                                    <option value="3">مدل 3 جفتی</option>
                                </select>
                            </div>
                            <div class="row" style="margin-top: 5px;">
                                <div class="col-md-12">
                                    <button type="button" id="computingmodel" class="btn btn-primary"> محاسبه</button>
                                </div>
                            </div>
                            <div class="row">
                                
                                <div class="col-md-12" id="modelNumberOff"></div>
                            </div>
                        </div>
-->

                        <div class="form-group">
                            <label>گالری تصاویر :</label>
                            <input type="hidden" name="photo_id[]" id="product-photo">
                            <div class="dropzone" id="photo"></div>
                        </div>



                        <div class="form-group">
                            <button onclick="productGallery()" class="btn dis btn-success pull-left">ذخیره</button>
                        </div>



                    </form>
                </div>
            </div>

        </div>
    </div>

</section>




<!-- page script -->

@endsection


@section('scripts')
<!-- Vue.js -->
<script src="/admin/js/app.js"></script>
<!-- jQuery 2.2.0 -->
<script src="/admin/plugins/jQuery/jQuery-2.2.0.min.js"></script>
<!-- jQuery UI 1.11.4 -->
<script src="https://code.jquery.com/ui/1.11.4/jquery-ui.min.js"></script>
<!-- Bootstrap 3.3.4 -->
<script src="/admin/bootstrap/js/bootstrap.min.js"></script>
<!-- SlimScroll -->
<script src="/admin/plugins/slimScroll/jquery.slimscroll.min.js"></script>
<!-- FastClick -->
<script src="/admin/plugins/fastclick/fastclick.min.js"></script>
<!-- ckEditor -->
<script src="/admin/plugins/ckeditor/ckeditor.js"></script>
<!-- AdminLTE App -->
<script src="/admin/dist/js/app.js"></script>
<!-- AdminLTE for demo purposes -->
<script src="/admin/dist/js/demo.js"></script>

<script src="/admin/dist/js/dropzone.js"></script>

<script>
    $('#addColor').on('click', function() {
        var allelements = $('input[name^="colormodel"]')
        var colors = $('#droppdowncolors option:selected')[0];
        var model = $('#droppdownmodel option:selected')[0];
        if (colors.value != 0 && model.value != 0) {
            var rand = Math.floor(Math.random() * 100);
            var input = $('<div style="padding-bottom: 15px;" class="row"><label class="col-md-12"> قیمت رنگ  ' + colors.text + '  و مدل ' + model.text + ':</label>'

                +
                '<input name="colormodel[' + rand + '][amount]" type="text" placeholder="لطفا مبلغ را وارد نمایید" maxlength="1000" />' +
                '<input name="colormodel[' + rand + '][colorid]" value="' + colors.value + '" type="hidden"/>' +
                '<input name="colormodel[' + rand + '][modelid]" value="' + model.value + '" type="hidden"/>'

                +
                '</div>');
            $("#allcolormodeldata").append(input);
        } else {
            alert('لطفا نام رنگ و مدل را انتخاب نمایید.');
        }
    });


    Dropzone.autoDiscover = false;
    var photoGallery = []
    var drop = new Dropzone('#photo', {
        addRemoveLinks: true
        , url: "{{route('photos.upload')}}"
        , sending: function(file, xhr, formData) {
            formData.append('_token', '{{csrf_token()}}')
        }
        , success: function(file, response) {
            if (response.photo_id == 0) {
                alert('حجم فایل زیاد است');
                $(".dis").attr('disabled', 'true')

            } else {
                photoGallery.push(response.photo_id)
            }
        }
    });

    productGallery = function() {
        $("#product-photo").val(photoGallery)
        $(".dis").removeAttr('disabled')
    }


    CKEDITOR.replace('textAreaDes', {
        customConfig: 'config.js'
        , toolbar: 'simple'
        , language: 'fa'
        , removePlugins: 'cloudservices'
        , uiColor: '#CCEAEE',


        // Upload images to a CKFinder connector (note that the response type is set to JSON).
        uploadUrl: '/apps/ckfinder/3.4.5/core/connector/php/connector.php?command=QuickUpload&type=Files&responseType=json',

        // Configure your file manager integration. This example uses CKFinder 3 for PHP.
        filebrowserBrowseUrl: '/apps/ckfinder/3.4.5/ckfinder.html'
        , filebrowserImageBrowseUrl: '/apps/ckfinder/3.4.5/ckfinder.html?type=Images'
        , filebrowserUploadUrl: '/apps/ckfinder/3.4.5/core/connector/php/connector.php?command=QuickUpload&type=Files'
        , filebrowserImageUploadUrl: '/apps/ckfinder/3.4.5/core/connector/php/connector.php?command=QuickUpload&type=Images',

        // The following options are not necessary and are used here for presentation purposes only.
        // They configure the Styles drop-down list and widgets to use classes.

    });


    $('#computing').on('click', function() {
        $('#colorNumberOff').html(' ');
        var colors = $('#colors option:selected');
        console.log(colors)
        if (colors) {
            var arr = $('#colors').val();
            console.log(arr)

            $.each(colors, function(index, value) {
                console.log(value.text)
                var input = $('<div class="col-md-12"><label>' + value.text +
                    ' :</label><input class="form-control" name="color_baste[' + value.value +
                    '][descount]" type="text" maxlength="2" /><input name="color_baste[' + value.value +
                    '][value]" value="' + value.value + '" type="hidden" /><input name="color_baste[' + value.value +
                    '][name]" value="' + value.text + '" type="hidden" /></div>');
                $("#colorNumberOff").append(input);
            });
        } else {
            alert('لطفا ابتدا یکی از گزینه های تعداد لنز و نحوه دسته بندی تیک بزنید .');
        }

    });




    $('#computingmodel').on('click', function() {
        $('#modelNumberOff').html(' ');
        var model = $('#model option:selected');
        console.log(colors)
        if (model) {
            var arr = $('#model').val();
            $.each(model, function(index, value) {
                console.log(value.text)
                var input = $('<div class="col-md-12"><label>' + value.text +
                    ' :</label><input class="form-control" name="model_baste[' + value.value +
                    '][descount]" type="text" maxlength="2" /><input name="model_baste[' + value.value +
                    '][value]" value="' + value.value + '" type="hidden" /><input name="model_baste[' + value.value +
                    '][name]" value="' + value.text + '" type="hidden" /></div>');
                $("#modelNumberOff").append(input);
            });
        } else {
            alert('لطفا ابتدا یکی از گزینه های تعداد لنز و نحوه دسته بندی تیک بزنید .');
        }

    });

</script>

<style>
    #colorNumberOff {
        padding: 18px;
        background-color: #eadfdf;
        margin-top: 10px;
        border-radius: 5px;
    }

    #modelNumberOff {
        padding: 18px;
        background-color: #eadfdf;
        margin-top: 10px;
        border-radius: 5px;
    }

</style>
@endsection
