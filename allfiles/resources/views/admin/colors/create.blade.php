@extends('admin.layout.master')

@section('styles')
    <link rel="stylesheet" href="/admin/dist/css/dropzone.css">
@endsection

@section('content')
    <link rel="stylesheet" href="/admin/plugins/datatables/dataTables.bootstrap.css">
    @include('admin.partial.form-error')

    <section class="content">

        <div class="box">
            <div class="box-header">
                <h4 class="box-title pull-right">ایجاد رنگ جدید</h4>
                {{--<div class="text-left">--}}
                    {{--<a href="{{route('categories.create')}}" class="btn btn-app">--}}
                        {{--<i class="fa fa-plus"></i> جدید--}}
                    {{--</a>--}}
                {{--</div>--}}
            </div>

            <div class="box-body">
                <div class="row">
                    <div class="col-md-8 col-md-offset-2">


                        <form action="{{route('colors.store')}}" method="post">
                            @csrf

                            <div class="form-group">
                                <label for="name">نام :</label>
                                <input name="name" class="form-control" placeholder="عنوان را وارد نمایید..." type="text" value="{{old("name")}}">
                            </div>


                            <div class="form-group">
                                <label for="code">کد رنگ :</label>
                                <input name="code" class="form-control" value="{{old("code")}}"/>
                            </div>






                            <div class="form-group">
                                <button class="btn dis btn-success pull-left">ذخیره</button>
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

    <script src="/admin/dist/js/dropzone.js"></script>
    <script>
        var drop = new Dropzone('#photo',{
            addRemoveLinks:true,
            maxFiles:1,
           url:"{{route('photos.upload')}}",
           sending: function (file,xhr,formData) {
                formData.append('_token','{{csrf_token()}}')
           },
            success: function (file,response) {
               if(response.photo_id == 0 ){
                   alert('حجم فایل زیاد است');
                   $(".dis").attr('disabled','true')

               }else {
                    $("#brand-photo").val(response.photo_id)
                    $(".dis").removeAttr('disabled')

               }
            }
        });
    </script>
@endsection