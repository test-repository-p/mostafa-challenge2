<div id="slider_384" class="carousel  special-offer" data-ride="carousel">
    <div>
        <ol class="carousel-indicators">

            @php
                $mostafa = 0;
            @endphp

          @foreach($product as $key=>$p)
                @if ($loop->first)
                    <li class="active" data-target="#slider_384" data-slide-to="{{$key}}">
                        <span>{{$p->title}}</span>
                    </li>
                    @else
                    <li data-target="#slider_384" data-slide-to="{{$key}}">
                        <span>{{$p->title}}</span>
                    </li>
                @endif
            @endforeach

        </ol>


    </div>
    <div class="carousel-inner" role="listbox">

        @foreach($product as $key=>$p)
            @if ($loop->first)
                <div class="item active">
                    <a href="{{route('product.page',$p->slug)}}"  title="دراور">
                        <img src="{{$p->photos[0]->thumb}}" alt="{{$p->title}}" />
                        <div class="description">
                            <h4 class="description1">{{$p->title}}</h4>
                            <h5 class="description2"></h5>
                            <div class="price-holder">
                                <div class="price" style="background-color: #ee2f43">
                                    <div class="old-price " style="background-color: #ffc747; border-color: transparent #ffc747 transparent transparent;">
                                        {{$p->discount_price}}
                                    </div>
                                        {{$p->price}} تومان
                                </div>
                            </div>
                        </div>
                                        <div class="clockdiv" >
                                            {!! $p->description !!}
                                        </div>
                    </a>
                </div>
            @else
                <div class="item">
                    <a href="{{route('product.page',$p->slug)}}"  title="دراور">
                        <img src="{{$p->photos[0]->thumb}}" alt="{{$p->title}}" />
                        <div class="description">
                            <h4 class="description1">{{$p->title}}</h4>
                            <h5 class="description2"></h5>
                            <div class="price-holder">
                                <div class="price" style="background-color: #ee2f43">
                                    <div class="old-price " style="background-color: #ffc747; border-color: transparent #ffc747 transparent transparent;">
                                        {{$p->discount_price}}
                                    </div>
                                    {{$p->price}} تومان
                                </div>
                            </div>
                        </div>
                        {{--                <div class="clockdiv" data-endtime="09/29/2020 12:00:00">--}}
                        {{--                    <p class="title">فرصت باقیمانده</p>--}}
                        {{--                    <div><span class="days"></span>--}}
                        {{--                        <div class="smalltext">روز</div>--}}
                        {{--                    </div>--}}
                        {{--                    <div><span class="hours"></span>--}}
                        {{--                        <div class="smalltext">ساعت</div>--}}
                        {{--                    </div>--}}
                        {{--                    <div><span class="minutes"></span>--}}
                        {{--                        <div class="smalltext">دقیقه</div>--}}
                        {{--                    </div>--}}
                        {{--                    <div><span class="seconds"></span>--}}
                        {{--                        <div class="smalltext">ثانیه</div>--}}
                        {{--                    </div>--}}
                        {{--                </div>--}}
                    </a>
                </div>
            @endif
        @endforeach

    </div>
</div>