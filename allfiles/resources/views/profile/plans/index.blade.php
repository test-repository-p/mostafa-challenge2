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
                <h4 class="box-title pull-right">پلن های قابل استفاده </h4>
            </div>
            <div class="box-body">
                <div class="row">
                   
                        <div class="col-sm-4 text-left">
                                <div class="panel panel-default border1">
                                                      <div class="panel-heading bg3"></div>
                                                      <div class="panel-body text-center">
                                                          <img class="panel-profile-img3" src="/uploads/portrait3.jpg">
                                                          <p class="author-title-vintage"><strong>Vintage Look</strong></p>
                                                          <p class="author-text-vintage">Lorem ipsum dolor sit amet, <a href="">consectetur</a> adipiscing elit. <u>Curabitur</u> sagittis tincidunt rutrum. Donec <i>porttitor</i> erat eu justo fermentum, a scelerisque dolor molestie.</p>
                                                          {{-- <p class="big-icons">
                                                                <a href="#"><i class="fa fa-facebook fa-fw" aria-hidden="true"></i></a>
                                                                <a href="#"><i class="fa fa-instagram fa-fw" aria-hidden="true"></i></a>
                                                                <a href="#"><i class="fa fa-flickr fa-fw" aria-hidden="true"></i></a>
                                                                <a href="#"><i class="fa fa-linkedin fa-fw" aria-hidden="true"></i></a>
                                                                <a href="#"><i class="fa fa-stack-overflow" aria-hidden="true"></i></a>
                                                          </p> --}}
                                                          <div>
                                                              <a href="#" class="btn btn-primary" type="button">
                                                                   اطلاعات بیشتر...   
                                                                  <i class="fa fa-info"></i>
                                                              </a>
                                        </div>
                                    </div>
                                </div>
                              
                              </div>





                              <div class="col-sm-4 text-left">
                                    <div class="panel panel-default border1">
                                                          <div class="panel-heading bg3"></div>
                                                          <div class="panel-body text-center">
                                                              <img class="panel-profile-img3" src="/uploads/portrait3.jpg">
                                                              <p class="author-title-vintage"><strong>Vintage Look</strong></p>
                                                              <p class="author-text-vintage">Lorem ipsum dolor sit amet, <a href="">consectetur</a> adipiscing elit. <u>Curabitur</u> sagittis tincidunt rutrum. Donec <i>porttitor</i> erat eu justo fermentum, a scelerisque dolor molestie.</p>
                                                              {{-- <p class="big-icons">
                                                                    <a href="#"><i class="fa fa-facebook fa-fw" aria-hidden="true"></i></a>
                                                                    <a href="#"><i class="fa fa-instagram fa-fw" aria-hidden="true"></i></a>
                                                                    <a href="#"><i class="fa fa-flickr fa-fw" aria-hidden="true"></i></a>
                                                                    <a href="#"><i class="fa fa-linkedin fa-fw" aria-hidden="true"></i></a>
                                                                    <a href="#"><i class="fa fa-stack-overflow" aria-hidden="true"></i></a>
                                                              </p> --}}
                                                              <div>
                                                                    <a href="#" class="btn btn-primary" type="button">
                                                                         اطلاعات بیشتر...   
                                                                        <i class="fa fa-info"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                      </div>
                                  
                                  </div>






                                  <div class="col-sm-4 text-left">
                                        <div class="panel panel-default border1">
                                                              <div class="panel-heading bg3"></div>
                                                              <div class="panel-body text-center">
                                                                  <img class="panel-profile-img3" src="/uploads/portrait3.jpg">
                                                                  <p class="author-title-vintage"><strong>Vintage Look</strong></p>
                                                                  <p class="author-text-vintage">Lorem ipsum dolor sit amet, <a href="">consectetur</a> adipiscing elit. <u>Curabitur</u> sagittis tincidunt rutrum. Donec <i>porttitor</i> erat eu justo fermentum, a scelerisque dolor molestie.</p>
                                                                  {{-- <p class="big-icons">
                                                                        <a href="#"><i class="fa fa-facebook fa-fw" aria-hidden="true"></i></a>
                                                                        <a href="#"><i class="fa fa-instagram fa-fw" aria-hidden="true"></i></a>
                                                                        <a href="#"><i class="fa fa-flickr fa-fw" aria-hidden="true"></i></a>
                                                                        <a href="#"><i class="fa fa-linkedin fa-fw" aria-hidden="true"></i></a>
                                                                        <a href="#"><i class="fa fa-stack-overflow" aria-hidden="true"></i></a>
                                                                  </p> --}}

                                                                  <div>
                                                                        <a href="#" class="btn btn-primary" type="button">
                                                                             اطلاعات بیشتر...   
                                                                            <i class="fa fa-info"></i>
                                                                        </a>
                                                                    </div>
                                                              </div>
                                                          </div>
                                      
                                      </div>

                                        <style>
.bg3 {
	background-image: url("/uploads/pbg3.jpg");
	background-size: cover;
	height: 195px;
	-webkit-box-shadow: none;
	box-shadow: none;
	border: 0px;
	border-radius: 0;
}
.panel-profile-img3 {
	max-width: 150px;
	margin-top: -100px;
	margin-bottom: 5px;
	border: 0px solid #fff;
	border-radius: 50%;
}
.panel-body.text-center {
	text-align: center !important;
}
                                        </style>    


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