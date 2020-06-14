@extends('profile.layout.master')

@section('styles')
    <link rel="stylesheet" href="/admin/dist/css/dropzone.css">
@endsection

@section('content')

    <link rel="stylesheet" href="/admin/plugins/datatables/dataTables.bootstrap.css">
    @include('profile.partial.form-error')

    @if(\Illuminate\Support\Facades\Session::has('success'))
        <div class="alert alert-success">
            <div>{{session('success')}}</div>
        </div>
    @endif

    <section class="content" id="app">
        <div class="box">
            <div class="box-header">
                <h4 class="box-title pull-right">ویرایش اطلاعات کاربری و تکمیل اطلاعات</h4>
            </div>
            <div class="box-body">
                <div class="row">
                    <div class="col-md-8 col-md-offset-2">


                        <form action="{{route('user.update',$user->id)}}" method="post" enctype="multipart/form-data">
                            @csrf
                            <input type="hidden" name="_method" value="POST">


                            <div class="form-group">
                                <label>نام و نام خانوادگی :</label>
                            <input  disabled class="form-control" placeholder="نام و نام خانوادگی را وارد نمایید..." type="text" value="{{$user->name}}">
                            </div>

                            <div class="form-group">
                                <label for="name">آدرس سایت : </label>
                                <input name="website" class="form-control" placeholder="وب سایت" type="text" value="{{$user->website}}">
                            </div>


                            <div class="form-group">
                                <label for="company">نام شرکت : (به صورت انگلیسی وارد شود این نام برای آدرس دامنه شما می باشد)</label>
                                <input name="company" class="form-control" placeholder="نام شرکت را وارد نمایید..." type="text" value="{{$user->company}}">
                            </div>

                            <div class="form-group">
                                <label>ایمیل  :</label>
                                <input disabled class="form-control" placeholder="ایمیل را وارد نمایید..." type="text" value="{{$user->email}}">
                            </div>

                            <div class="form-group">
                                <label>شماره تلفن   :</label>
                                <input disabled class="form-control" placeholder=" شماره تلفن را وارد نمایید..." type="text" value="{{$user->phone}}">
                            </div>

                            <div class="form-group">
                                <label for="birthday">تاریخ تولد   :</label>
                                <input name="birthday" class="form-control" placeholder="تایخ تولد را وارد نمایید..." type="text" value="{{$user->birthday}}">
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
                                    <input name="address" class="form-control" placeholder="آدرس را وارد نمایید..." type="text" value="{{$user->address}}">
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
                                <input type="text" name="lat" id="lat" value="{{$user->lat}}"><br>
                                <input type="text" name="lng" id="lng" value="{{$user->lng}}">
                            </div>

                            <script type="text/javascript">

                                var options = {
                                    center: [32.32428, 53.96484],
                                    zoom: 5
                                }

                                var map = L.map('map', options);

                                L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {attribution: '&copy; <a target="_blank" href="https://amnserver.com">Amnserver.com</a>'}).addTo(map);



                                var myMarker = L.marker([{{$user->lat}}, {{$user->lng}}], {title: "MyPoint", alt: "The Big I", draggable: true})
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

                            <div class="row">
                                <div class="container">
                                    <div class="col-md-6">
                                            <label for="description">تصویر :</label>
                                            <input type="file" name="avatar" id="avatar">
                                            <span style="color:red">* در صورت عدم تمایل به تغییر تصویر این قسمت را بدون تغییر رها نمایید.</span>
                                    </div>
                                    <div class="col-md-6">
                                            <div class="form-group">
                                                @if ($user->avatar)
                                                    <img class="img-circle" width="80" height="80" src="{{$user->avatar->path}}">
                                                @else
                                                    <img class="img-circle" width="80" height="80" src="/storage/photos/test.png">
                                                @endif                                            </div>
                                    </div>
                                </div>
                            </div>


                            <hr>


                            <div class="form-group">
                                <button  class="btn dis btn-success pull-left">ذخیره</button>
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
    <!-- ckEditor -->
    <script src="/admin/plugins/ckeditor/ckeditor.js"></script>
    <!-- AdminLTE App -->
    <script src="/admin/dist/js/app.js"></script>
    <!-- AdminLTE for demo purposes -->
    <script src="/admin/dist/js/demo.js"></script>



@endsection