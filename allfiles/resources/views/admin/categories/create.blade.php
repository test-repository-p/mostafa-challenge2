@extends('admin.layout.master')

@section('content')
    <link rel="stylesheet" href="/admin/plugins/datatables/dataTables.bootstrap.css">

    <section class="content">

        @include('profile.partial.form-error')

        @if(\Illuminate\Support\Facades\Session::has('success'))
            <div class="alert alert-success">
                <div>{{session('success')}}</div>
            </div>
        @endif

        <div class="box">
            <div class="box-header">
                <h4 class="box-title pull-right">ایجاد منوی جدید</h4>
                {{--<div class="text-left">--}}
                    {{--<a href="{{route('categories.create')}}" class="btn btn-app">--}}
                        {{--<i class="fa fa-plus"></i> جدید--}}
                    {{--</a>--}}
                {{--</div>--}}
            </div>

            <div class="box-body">
                <div class="row">
                    <div class="col-md-8 col-md-offset-2">


                        <form action="{{route('categories.store')}}" method="post" enctype="multipart/form-data">
                            @csrf

                            <div class="form-group">
                                <label for="name">نام :</label>
                                <input name="name" class="form-control" placeholder="نام را وارد نمایید..." type="text">
                            </div>

                            <div class="form-group">
                                <label for="slug">نام مستعار :</label>
                                <input name="slug" class="form-control" placeholder="نام مستعار را وارد نمایید..." type="text" value="{{old("slug")}}">
                            </div>



                            <div class="form-group">
                                <label for="category_parent">نام والد :</label>
                                <select name="category_parent" class="form-control" id="">

                                    <option value="0">بدون والد</option>
                                    @foreach($categories as $category)
                                        <option value="{{$category->id}}">{{$category->name}}</option>
                                        @if(count($category->childrenRecursive) > 0)
                                            @include('admin.partial.category',['categories' => $category->childrenRecursive ,'level' => 1])
                                        @endif
                                    @endforeach
                                </select>
                            </div>


                            <div class="form-group">
                                <button class="btn btn-success pull-left">ذخیره</button>
                            </div>



                        </form>
                    </div>
                </div>

            </div>
        </div>

    </section>



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
    <!-- AdminLTE App -->
    <script src="/admin/dist/js/app.min.js"></script>
    <!-- AdminLTE for demo purposes -->
    <script src="/admin/dist/js/demo.js"></script>
    <!-- page script -->
    <!-- ckEditor -->
    <script src="/admin/plugins/ckeditor/ckeditor.js"></script>

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
