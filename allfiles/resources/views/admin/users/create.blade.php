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
                <h4 class="box-title pull-right">ایجاد کاربر جدید</h4>
                {{--<div class="text-left">--}}
                    {{--<a href="{{route('categories.create')}}" class="btn btn-app">--}}
                        {{--<i class="fa fa-plus"></i> جدید--}}
                    {{--</a>--}}
                {{--</div>--}}
            </div>

            <div class="box-body">
                <div class="row">
                    <div class="col-md-8 col-md-offset-2">


                        <form action="{{route('users.store')}}" method="post" enctype="multipart/form-data">
                            @csrf

                            <div class="form-group">
                                <label for="name">نام و نام خانوادگی :</label>
                                <input name="name" class="form-control" placeholder="نام و نام خانوادگی را وارد نمایید..." type="text" value="{{old("name")}}">
                            </div>

                            <div class="form-group">
                                <label for="name">آدرس سایت : </label>
                                <input name="website" class="form-control" placeholder="وب سایت" type="text" value="{{old("website")}}">
                            </div>

                            <div class="form-group">
                                <label for="email">ایمیل :</label>
                                <input name="email" class="form-control" placeholder="ایمیل را وارد نمایید..." type="text" value="{{old("email")}}">
                            </div>

                            <div class="form-group">
                                <label for="password">کلمه عبور :</label>
                                <input name="password" class="form-control" placeholder="کلمه عبور را وارد نمایید..." type="text" value="{{old("password")}}">
                            </div>


                            <div class="form-group">
                                <label for="mobile">موبایل :</label>
                                <input name="mobile" class="form-control" placeholder="موبایل را وارد نمایید..." type="text" value="{{old("mobile")}}">
                            </div>



                            <div class="form-group">
                                <label for="company">نام شرکت : (به صورت انگلیسی وارد شود این نام برای آدرس دامنه شما می باشد)</label>
                                <input name="company" class="form-control" placeholder="نام شرکت را وارد نمایید..." type="text" value="{{old('company')}}">
                            </div>

                            <div class="form-group">
                                <label for="birthday">تاریخ تولد   :</label>
                                <input name="birthday" class="form-control" placeholder="تایخ تولد را وارد نمایید..." type="text" value="{{old('birthday')}}">
                            </div>

                            <div class="form-group">
                                    <label for="gender">جنسیت  :</label>
                                    <select name="gender">
                                        <option value="1">مرد</option>
                                        <option value="2">زن</option>
                                    </select>
                            </div>



                            <div class="form-group">
                                <label for="address">آدرس  :</label>
                                <input name="address" class="form-control" placeholder="آدرس را وارد نمایید..." type="text" value="{{old('address')}}">
                        </div>

                        <link rel="stylesheet" href="https://d19vzq90twjlae.cloudfront.net/leaflet/v0.7.7/leaflet.css" />
                        <script src="https://d19vzq90twjlae.cloudfront.net/leaflet/v0.7.7/leaflet.js"></script>
                        <style type="text/css">
                            #map {
                                height: 546px;
                                width: 100%;
                                padding: 0;
                                margin: 0;
                                /* float: left; */
                            }
                            #mapData {
                                height: 400px;
                                width: 40%;
                                padding: 0;
                                margin: 0;
                                text-align: right;
                                /* float: right; */
                            }
                        </style>


                            <div id="map"></div>
                            <div id="mapData" style="display:none">
                                <input type="text" name="lat" id="lat" value=""><br>
                                <input type="text" name="lng" id="lng" value="">
                            </div>

                            <script type="text/javascript">

                                var options = {
                                    center: [32.32428, 53.96484],
                                    zoom: 5
                                }

                                var map = L.map('map', options);

                                L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {attribution: '&copy; <a target="_blank" href="https://amnserver.com">Amnserver.com</a>'}).addTo(map);



                                var myMarker = L.marker(['35.67515', '51.3501'], {title: "MyPoint", alt: "The Big I", draggable: true})
                                .addTo(map)
                                .on('dragend', function() {
                                    var coord = String(myMarker.getLatLng()).split(',');
                                    console.log(coord);
                                    var lat = coord[0].split('(');
                                    console.log(lat);
                                    var lng = coord[1].split(')');
                                    console.log(lng);
                                    myMarker.bindPopup("Moved to: " + lat[1] + ", " + lng[0] + ".");
                                    document.getElementById("lat").value = (lat[1].trim())
                                    document.getElementById("lng").value = (lng[0].trim())

                                });





                            </script>





                        <hr>





                            <div class="form-group">
                                    <label for="roles">نقش :</label>
                                    <select class="form-control" multiple id="roles" name="roles[]">
                                        @foreach ($roles as $role)
                                    <option value="{{$role->id}}">{{$role->title}}</option>
                                        @endforeach
                                    </select>
                            </div>

                            <div class="form-group">
                                    <label for="status">فعال/غیرفعال :</label>
                                    <select class="form-control" name="status" id="status">
                                        <option value="0">فعال</option>
                                        <option value="1">غیرفعال</option>
                                    </select>
                            </div>
                            <div class="form-group">
                                <label for="description">تصویر :</label>
                                <input type="file" name="avatar" id="avatar" class="form-control">
                            </div>




                            <div class="form-group">
                                <button class="btn dis btn-success pull-left" type="submit">ذخیره</button>
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
