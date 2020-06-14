<div class="container-fluid white-background full-product-detail">
    <div class="container">
        <div class="row margin-top big-margin-bottom">
            <div class="col-sm-12">
                <div class="modular_module ">
                    <div class="last-products">
                        <div class="caption">
                            <div class="title-box">
                                <span class="ball-title-small"></span>
                                <span class="ball-title"></span>
                                <span class="title-space"><span class="foroshande"></span>آخرین محصولات</span>
                                <span class="ball-title"></span>
                                <span class="ball-title-small"></span>
                            </div>
                        </div>
                        <div class="product-box top-seller-container">
                            <div class="wrapper">
                                <div class="boxlist heighcarousel">
                                    <ul class="item top-seller-wrapper row" data-auto="true" data-count="4" id="product_box_290">
                                        @foreach($latestproduct as $product)
                                        <li>
                                            <div class="one-product-box-wrapper  brand-top-seller-wrapper">
                                                <div class="one-product-box with-discount">
                                                    <a href="{{route('product.page',$product->slug)}}" title="{{$product->title}}">
                                                        <img alt="{{$product->title}}" data-src="{{(count($product->photos)) ? $product->photos[0]->thumb : ''}}" src="/uploads/250-250-default.png" />
                                                    </a>
                                                    <div class="product-title-bar">
                                                        <div class="product-title">
                                                            <a title="{{$product->title}}" href="{{route('product.page',$product->slug)}}">{{$product->title}}</a>
                                                        </div>
                                                    </div>
                                                    <div class="brand-top-seller-price">
                                                        <div class="show-price">
                                                            <span class="discount">{{$product->discount_price}} % </span>
                                                            <span class="new-price"> {{number_format(($product->price - ($product->price * $product->discount_price) / 100))}} تومان</span>
                                                        </div>
                                                    </div>
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
</div>
