@extends('profile.layout.master')

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


                    <form action="{{route('userproducts.store')}}" method="post">
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
                            <label for="price_discount">قیمت ویژه محصول :</label>
                            <input name="price_discount" class="form-control" placeholder="قیمت ویژه را وارد نمایید..." type="number" value="{{old("price_discount")}}">
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


                        






                        <div class="form-group">
                            <div class="col-md-4">
                                <select style="height:200px !important;" id="lenzNumberCategory" name="lenzNumberCategory[]" class="form-control" size="7" multiple="">
                                    <option value="بسته تک جفتی">بسته تک جفتی</option>
                                    <option value="بسته 3 عددی">بسته 3 عددی</option>
                                    <option value="بسته 3 جفتی">بسته 3 جفتی</option>
                                    <option value="بسته 5 عددی">بسته 5 عددی</option>
                                    <option value="بسته 10 عددی">بسته 10 عددی</option>
                                    <option value="بسته 15 عددی">بسته 15 عددی</option>
                                    <option value="بسته 30 عددی">بسته 30 عددی</option>
                                </select>
                            </div>
                            <div class="col-md-2">
                                <button type="button" id="computing" class="btn btn-primary"> محاسبه</button>
                            </div>
                            <div class="col-md-6" id="lenzNumberOff">

                            </div>
                        </div>


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




</script>


@endsection
