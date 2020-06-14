@extends('admin.layout.master')

@section('content')
    <link rel="stylesheet" href="/admin/plugins/datatables/dataTables.bootstrap.css">

@include('admin.partial.form-error')

@if(\Illuminate\Support\Facades\Session::has('delete_error'))
    <div class="alert alert-danger">
        <div>{{session('delete_error')}}</div>
    </div>
@endif


@if(\Illuminate\Support\Facades\Session::has('success'))
    <div class="alert alert-success">
        <div>{{session('success')}}</div>
    </div>
@endif


<section class="content">

    <div class="box">
        <div class="box-header">
            <h4 class="box-title pull-right">لیست محصولات</h4>
            <div class="text-left">
                <a href="{{route('products.create')}}" class="btn btn-app">
                    <i class="fa fa-plus"></i> جدید
                </a>
            </div>
        </div>

        <div class="box-body">

            <table id="example1" class="table table-bordered table-striped">
                <thead>
                <tr>
                    <th class="text-center">شناسه</th>
                    <th class="text-center">کد محصول</th>
                    <th class="text-center">دسته بندی</th>
                    <th class="text-center">عنوان</th>
                    <th class="text-center">عملیات</th>
                </tr>
                </thead>
                <tbody>
@foreach($products as $product)
                <tr>
                    <td class="text-center">{{$product->id}}</td>
                    <td class="text-center">{{$product->sku}}</td>
                    <td class="text-center">
                        @if (count($product->categories))
                            @foreach ($product->categories as $cat)
                                <span class="label label-primary">  {{$cat->name}} </span>
                            @endforeach
                        @else
                            
                        @endif                        
                    </td>
                    <td class="text-center">{{$product->title}}</td>
                    <td class="text-center">
                        <a class="btn btn-warning" href="{{route('products.edit',$product->id)}}">ویرایش</a>
                        <div class="inline-block">
                            <form method="post" action="{{route('products.destroy',$product->id)}}">
                                @csrf
                                <input type="hidden" name="_method" value="DELETE">
                                <button type="submit" class="btn btn-danger">حذف</button>
                            </form>
                        </div>
                    </td>
                </tr>

    @endforeach

                </tbody>
                <tfoot>
                <tr>
                    <th class="text-center">شناسه</th>
                    <th class="text-center">کد محصول</th>
                    <th class="text-center">عنوان</th>
                    <th class="text-center">عملیات</th>
                </tr>
                </tfoot>
            </table>
        </div><!-- /.box-body -->
    </div><!-- /.box -->

</section>

<style>
    span.label.label-primary {
    margin-left: 5px;
}
    </style>


    <!-- jQuery 2.2.0 -->
    <script src="/admin/plugins/jQuery/jQuery-2.2.0.min.js"></script>
    <!-- jQuery UI 1.11.4 -->
    <script src="/admin/js/jquery-ui.min.js"></script>
    <!-- Bootstrap 3.3.4 -->
    <script src="/admin/bootstrap/js/bootstrap.min.js"></script>
    <!-- DataTables -->
    <script src="/admin/plugins/datatables/jquery.dataTables.min.js"></script>
    <script src="/admin/plugins/datatables/dataTables.bootstrap.min.js"></script>
    <!-- SlimScroll -->
    <script src="/admin/plugins/slimScroll/jquery.slimscroll.min.js"></script>
    <!-- FastClick -->
    <script src="/admin/plugins/fastclick/fastclick.min.js"></script>
    <!-- AdminLTE App -->
    <script src="/admin/dist/js/app.min.js"></script>
    <!-- AdminLTE for demo purposes -->
    <script src="/admin/dist/js/demo.js"></script>
    <!-- page script -->
    <script>
        $(function () {
            $('#example1').DataTable({
                //dom: 'Bfrtip',
                "order": [[ 0, "desc" ]],
                "language":{
                    "sProcessing":   "درحال پردازش...",
                    "sLengthMenu":   "نمایش محتویات _MENU_",
                    "sZeroRecords":  "موردی یافت نشد",
                    "sInfo":         "نمایش _START_ تا _END_ از مجموع _TOTAL_ مورد",
                    "sInfoEmpty":    "تهی",
                    "sInfoFiltered": "(فیلتر شده از مجموع _MAX_ مورد)",
                    "sInfoPostFix":  "",
                    "sSearch":       "جستجو:",
                    "sUrl":          "",
                    "oPaginate": {
                        "sFirst":    "ابتدا",
                        "sPrevious": "قبلی",
                        "sNext":     "بعدی",
                        "sLast":     "انتها"
                    }
                }
            }).on("xhr.dt", function(e,settings,json,xhr){
                //(json.data).splice(json.data.length-1,1);
            });

        });
    </script>
@endsection