@extends('admin.layout.master')

@section('styles')
    <link rel="stylesheet" href="/admin/dist/css/dropzone.css">
@endsection

@section('content')
    <section class="content">
        
        <div class="box">
                @include('admin.partial.form-error')
            <div class="box-header">
                <h4 class="box-title pull-right">ویرایش ویژگی</h4>
                {{--<div class="text-left">--}}
                {{--<a href="{{route('categories.create')}}" class="btn btn-app">--}}
                {{--<i class="fa fa-plus"></i> جدید--}}
                {{--</a>--}}
                {{--</div>--}}
            </div>

            <div class="box-body">
                <div class="row">
                    <div class="col-md-8 col-md-offset-2">


                        <form action="{{route('sliders.update',$slider->id)}}" method="post">
                            @csrf
                            <input type="hidden" name="_method" value="PATCH">

                            <div class="form-group">
                                <label for="title">تصویر اسلایدر</label>
                                <img src="{{$slider->photo->path}}" class="img-responsive">
                            </div>

                            <div class="form-group">
                                <label for="title">عنوان :</label>
                                <input name="title" value="{{$slider->title}}" class="form-control" placeholder="عنوان را وارد نمایید..." type="text">
                            </div>


                            <div class="form-group">
                                <label for="description">توضیحات :</label>
                                <textarea name="description" class="form-control">{{$slider->description}}</textarea>
                            </div>


                            <div class="form-group">
                                <label for="description">تصویر :</label>
                                <input type="hidden" name="photo_id" id="brand-photo" value="{{$slider->photo_id}}">
                                <div class="dropzone" id="photo"></div>
                            </div>



                            <div class="form-group">
                                    <label for="description"> تصویر بکگراند :</label>
                                    <input type="hidden" name="back_id" id="back-photo" value="{{$slider->back_id}}">
                                   <div class="dropzone" id="backphoto"></div>
                                </div>



                            <div class="form-group">
                                <button class="btn btn-success pull-left">ویرایش</button>
                            </div>



                        </form>
                    </div>
                </div>

            </div>
        </div>

    </section>

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



        var drop = new Dropzone('#backphoto',{
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
                    $("#back-photo").val(response.photo_id)
                    $(".dis").removeAttr('disabled')

               }
            }
        });
    </script>
@endsection