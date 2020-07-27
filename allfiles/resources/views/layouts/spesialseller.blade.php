
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="modular_module ">
                <div class="last-products simple-scroll">
                    <div class="caption">
                        <div class="title-box">
                            <span class="ball-title-small"></span>
                            <span class="ball-title"></span>
                            <span class="title-space"><span class="foroshande"></span>فروشندگان ویژه</span>
                            <span class="ball-title"></span>
                            <span class="ball-title-small"></span>
                        </div>
                    </div>
                    <div class="product-box top-seller-container customheight">
                        <div class="wrapper">
                            <div class="boxlist">
                                <ul class="item top-seller-wrapper row" id="product_box_291" data-auto="true"
                                    data-center="true" data-count="4">


                                    @foreach($brands as $brand)
                                        <li class="">
                                            <div class="brand-top-seller-wrapper one-product-box-wrapper ">
                                                <div class="one-product-box noborder background-transparent">
                                                    <a
                                                            href="#"
                                                            title="">
                                                        <img class="brandsize" alt="{{$brand->title}}"
                                                             data-src="{{$brand->photo->path}}"
                                                             src="uploads/250-250-default.png"/>
                                                    </a>
                                                    <div class="product-title-bar">
                                                        <div class="product-title">
                                                            <a class="product-link"
                                                               title=""
                                                               href="#">
                                                                {{$brand->title}}
                                                            </a>
                                                        </div>
                                                    </div>
                                                    {{--<div class="brand-top-seller-price">--}}
                                                    {{--<div class="show-price"><span class="old-price">--}}
                                                    {{--20,300,000تومان </span>--}}
                                                    {{--<span class="new-price">--}}
                                                    {{--14,200,000تومان </span></div>--}}
                                                    {{--</div>--}}
                                                </div>
                                            </div>
                                        </li>
                                    @endforeach

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
