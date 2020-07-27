<div class="container-fluid full-product-detail">
    <div class="container">
        <div class="row margin-top big-margin-bottom">
            <div class="col-sm-12">
                <div class="modular_module ">
                    <div class="last-products">
                        <div class="caption">
                            <div class="title-box">
                                <span class="ball-title-small"></span>
                                <span class="ball-title"></span>
                                <span class="title-space"><span class="foroshande"></span>جدیدترین محصولات</span>
                                <span class="ball-title"></span>
                                <span class="ball-title-small"></span>
                            </div>
                        </div>
                        <div class="product-box top-seller-container">
                            <div class="wrapper">
                                <div class="boxlist">
                                    <ul class="item top-seller-wrapper row" data-auto="true"  data-count="6" id="product_box_290">
                                        @foreach($latestproduct as $product)
                                            <li>
                                                <div  class="one-product-box-wrapper  brand-top-seller-wrapper">
                                                    <div class="one-product-box with-discount">
                                                    <a  href="{{route('product.page',$product->slug)}}" title="{{$product->title}}">
                                                            <img alt="{{$product->title}}" data-src="{{$product->photos[0]->thumb}}"  src="/uploads/250-250-default.png"/>
                                                    </a>
                                                        <span class="product-seller-url">
                                                            <a  href="{{route('user.page',$product->user->company)}}" tabindex="-1">
                                                                <span  class="col-md-3 col-sm-3 col-xs-3 mt-10 p-none">
                                                                    <img  src="{{$product->user->avatar->path}}"
                                                                          alt="{{$product->user->name}}" class="img-shop-category"
                                                                          width="40" height="40">
                                                                </span>
                                                                <span
                                                                        class="col-md-9 col-sm-9 col-xs-9 mt-5 pr-res">
                                                                    <p class="shop-name-category-index" title="{{$product->user->name}}">
                                                                        {{$product->user->name}}
                                                                        <span class="verify-sm hidden pos-product-seller-title"></span>
                                                                    </p>
                                                                </span>
                                                            </a>
                                                        </span>

                                                        <div class="product-title-bar">
                                                            <div class="product-title">
                                                                <a   title="{{$product->title}}" href="{{route('product.page',$product->slug)}}">{{$product->title}}</a>
                                                            </div>
                                                        </div>

                                                        <div class="brand-top-seller-price">
                                                            <div class="show-price"><span class="old-price">{{$product->price}}</span>
                                                                <span class="new-price"> {{$product->discount_price}} </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {{-- <div class="view-more-same-category">
                                                        <a href="#"   class="btn">     سایر محصولات گروه {{$product->categories[0]->name}} </a>
                                                    </div> --}}
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
</div>

