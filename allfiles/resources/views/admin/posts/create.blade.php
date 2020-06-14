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
                <h4 class="box-title pull-right">ایجاد مطلب  جدید</h4>
            </div>
            <div class="box-body">
                <div class="row">
                    <div class="col-md-8 col-md-offset-2">


                        <form action="{{route('posts.store')}}" method="post" enctype="multipart/form-data">
                            @csrf

                            <div class="form-group">
                                <label for="title">عنوان :</label>
                                <input name="title" class="form-control" placeholder="نام محصول را وارد نمایید..." type="text" value="{{old("title")}}">
                            </div>

                            <div class="form-group">
                                <label  for="slug">عنوان مستعار :</label>
                                <input disabled name="slug" class="form-control" placeholder="از عنوان مطلب استفاده خواهد شد " type="text" value="{{old("slug")}}">
                            </div>

                            <div class="form-group">
                                <label for="category">گروه خبر :</label>
                                <select name="category">
                                    <option value="0">انتخاب نمایید ...</option>
                                    @foreach ($categories as $category)
                                        <option value="{{$category->id}}">{{$category->title}}</option>
                                    @endforeach
                                </select>
                            </div>

                            <div class="form-group">
                                <label for="status">وضعیت نشر :</label>
                                <input type="radio" style="vertical-align: middle;" name="status" value="0" checked> <span> منتشر نشده </span>
                                <input type="radio" style="vertical-align: middle;" name="status" value="1"> <span> منتشر شده </span>
                            </div>

                            <div class="form-group">
                                <label for="description">توضیحات :</label>
                                <textarea id="textAreaDes" name="description" class="form-control">{{old("description")}}</textarea>
                            </div>



                            <div class="form-group">
                                <label for="meta_description">توضیحات SEO را وارد نمایید :</label>
                                <input name="meta_description" class="form-control" placeholder="توضیحات SEO" type="text">
                            </div>

                            <div class="form-group">
                                <label for="meta_keywords">کلمات کلیدی SEO  را وارد نمایید. :</label>
                                <input name="meta_keywords" class="form-control" placeholder="کلمات کلیدی SEO" type="text">
                            </div>


                            <div class="form-group">
                                <label for="avatar">تصویر :</label>
                                <input type="file" name="avatar" id="avatar" class="form-control">
                            </div>



                            <div class="form-group">
                                <button type="submit" class="btn dis btn-success pull-left">ذخیره</button>
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



        CKEDITOR.replace( 'textAreaDes',{
            customConfig: 'config.js',
            toolbar: 'simple',
            language: 'fa',
            removePlugins: 'cloudservices',
            uiColor: '#CCEAEE',


            // Upload images to a CKFinder connector (note that the response type is set to JSON).
            uploadUrl: '/apps/ckfinder/3.4.5/core/connector/php/connector.php?command=QuickUpload&type=Files&responseType=json',

            // Configure your file manager integration. This example uses CKFinder 3 for PHP.
            filebrowserBrowseUrl: '/apps/ckfinder/3.4.5/ckfinder.html',
            filebrowserImageBrowseUrl: '/apps/ckfinder/3.4.5/ckfinder.html?type=Images',
            filebrowserUploadUrl: '/apps/ckfinder/3.4.5/core/connector/php/connector.php?command=QuickUpload&type=Files',
            filebrowserImageUploadUrl: '/apps/ckfinder/3.4.5/core/connector/php/connector.php?command=QuickUpload&type=Images',

            // The following options are not necessary and are used here for presentation purposes only.
            // They configure the Styles drop-down list and widgets to use classes.

        } );

    </script>


@endsection
