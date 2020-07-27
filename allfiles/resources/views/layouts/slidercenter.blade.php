<div class="row big-margin-top flex-row big-margin-bottom">
    <div class="col-sm-12 col-lg-4 col-md-12 with-flex-child">
        <div class="modular_module ">
            <div class="thumb">
                <div class="carousel slide category-box" data-ride="carousel" id="category_box_298"
                     data-interval="false">
                    <div class="cattitle">
                        <h5>از میان دسته بندی های متنوع انتخاب کنید</h5>
                    </div>
                    <div class="carousel-inner categorydata">
                        <div class="item active">
                            <div class="row">
                                <div class="col-md-4 col-sm-4 col-xs-4 catcontain" data-id="11">
                                    <a class="categorylist"   title="مبلمان">
                                        <img src="uploads/x-50-1.png" alt="مبلمان"/>
                                    </a>
                                    <div class="catcaption">
                                        <a  title="مبلمان">مبلمان</a>
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-4 col-xs-4 catcontain" data-id="7">
                                    <a class="categorylist"  title="تخت و سرویس خواب">
                                        <img src="uploads/x-50-59e8512f75401.png" alt="تخت و سرویس خواب"/>
                                    </a>
                                    <div class="catcaption">
                                        <a  title="تخت و سرویس خواب">تخت و سرویس خواب</a>
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-4 col-xs-4 catcontain" data-id="1">
                                    <a class="categorylist" title="تشک و روتختی">
                                        <img src="uploads/x-50-59e8512f75401.png" alt="تشک و روتختی"/>
                                    </a>
                                    <div class="catcaption">
                                        <a title="تشک و روتختی">
                                            تشک و روتختی
                                        </a>
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-4 col-xs-4 catcontain" data-id="3">
                                    <a class="categorylist"  title="غذا خوردی">
                                        <img src="uploads/x-50-59e85cedcd7c1.png" alt="غذا خوردی"/>
                                    </a>
                                    <div class="catcaption">
                                        <a   title="غذا خوردی">غذا خوردی</a>
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-4 col-xs-4 catcontain" data-id="8">
                                    <a class="categorylist"  title="صندلی">
                                        <img src="uploads/x-50-59e851907352e.png" alt="صندلی"/>
                                    </a>
                                    <div class="catcaption">
                                        <a  title="صندلی">صندلی</a>
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-4 col-xs-4 catcontain" data-id="2">
                                    <a class="categorylist"   title="ساعت ایستاده و دیواری">
                                        <img src="uploads/x-50-9.png" alt="ساعت ایستاده و دیواری"/></a>
                                    <div class="catcaption">
                                        <a  title="ساعت ایستاده و دیواری">ساعت ایستاده و دیواری</a>
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-4 col-xs-4 catcontain" data-id="6">
                                    <a class="categorylist"   title="ویترین و استند">
                                        <img src="uploads/x-50-59e84fa9751e9.png" alt="ویترین و استند"/>
                                    </a>
                                    <div class="catcaption">
                                        <a
                                                title="ویترین و استند">ویترین و استند</a>
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-4 col-xs-4 catcontain" data-id="710">
                                    <a class="categorylist"  title="کمد و کتابخانه">
                                        <img src="uploads/x-50-59e857a2e3547.png" alt="کمد و کتابخانه"/>
                                    </a>
                                    <div class="catcaption">
                                        <a  title="کمد و کتابخانه">کمد و کتابخانه</a>
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-4 col-xs-4 catcontain" data-id="12">
                                    <a class="categorylist"   title="میز">
                                        <img src="uploads/x-50-59e85d0721941.png" alt="میز"/>
                                    </a>
                                    <div class="catcaption">
                                        <a    title="میز">میز</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-sm-12 col-lg-8 col-md-12 child-full-width">
        <div class="modular_module " id="renderslider">

        </div>
    </div>
</div>

<script>

    $(document).ready(function () {
        $(".categorydata .catcontain:first-child").click();
    });

    $(".catcontain").click(function () {
        var dataid = $(this).data('id');
        $.ajax({
            url: "{{route('sendSliderData')}}",
            type: "POST",
            data:{
                "id" : dataid,
                "_token": "{{ csrf_token() }}",
            },
            beforeSend: function () {
                $("#renderslider").addClass('khooger-loading');
                $("#renderslider").html('');
            },
            success: function (result) {
                if(result.success){
                    // console.log(result)
                    $("#renderslider").html(result.data);
                    $("#renderslider").removeClass('khooger-loading');
                }else{
                    $("#renderslider").addClass('khooger-loading');
                    $("#renderslider").html(result.data);
                }
            },
            error: function () {

            }
        });//ajax



        // var li = $(".carousel-indicators li");
        //
        // var data = 0;
        // var refreshIntervalId =  setInterval(function () {
        //     li[data].addClass('active');
        //     data +=1;
        //     li[data].removeClass('active')
        //     if (li.length == data){
        //         data = 0;
        //     }
        // },2000)


    })
</script>
