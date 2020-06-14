@extends('admin.layout.master')

@section('content')
    <link rel="stylesheet" href="/admin/plugins/datatables/dataTables.bootstrap.css">

    <section class="content">

        <div class="box">
            <div class="box-header">
                <h4 class="box-title pull-right">تعیین ویژگی دسته بندی {{$category->name}}</h4>
                {{--<div class="text-left">--}}
                {{--<a href="{{route('categories.create')}}" class="btn btn-app">--}}
                {{--<i class="fa fa-plus"></i> جدید--}}
                {{--</a>--}}
                {{--</div>--}}
            </div>

            <div class="box-body">
                <div class="row">
                    <div class="col-md-8 col-md-offset-2">
                        <form action="{{route('categories.setting',$category->id)}}" method="post">
                            @csrf
                            <div class="form-group">
                                <label for="category_parent">ویژگی های دسته بندی {{$category->name}} :</label>
                                <select name="attributeGroups[]" class="form-control" multiple>
                                    @foreach($attributeGroups as $attributeGroup)
                                        <option value="{{$attributeGroup->id}}" @if(in_array($attributeGroup->id,$category->attributeGroups->pluck('id')->toArray())) selected @endif>{{$attributeGroup->title}}</option>
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

@endsection