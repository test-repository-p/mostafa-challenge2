<section class="pt-5">
    <div class="container">
        <div class="row">
            <div class="caption">
                <div class="title-box">
                    <span class="ball-title-small"></span>
                    <span class="ball-title"></span>
                    <span class="title-space"><span class="foroshande"></span> دسته بندی محصولات </span>
                    <span class="ball-title"></span>
                    <span class="ball-title-small"></span>
                </div>
            </div>
        </div>
        <div class="row mt-4">
            @foreach($categories as $data)
            <div class="col-md-3 pb-5">
                <div class="appear-animation animated fadeIn appear-animation-visible" data-appear-animation="fadeIn" data-appear-animation-delay="0">
                    <div class="thumb-info thumb-info-no-zoom thumb-info-custom mb-5 text-center">
                        <div class="thumb-info-side-image-wrapper p-0">
                            <img src="{{$data->pic}}" class="img-fluid" alt="{{$data->name}}">
                            {{-- <img class="thumb-info-custom-icon" src="img/cat-icons.png" alt="{{$data->name}}"> --}}
                        </div>
                        <div class="thumb-info-caption">
                            <div class="thumb-info-caption-text">
                                <h1 class="mb-3 mt-1"> {{$data->name}} </h1>
                                <p>{!!$data->des!!}</p>
                                <a class="btn btn-primary mt-3" href="{{route('categorypage',[$data->slug])}}"><i class="fa fa-long-arrow-left"></i>
                                    مشاهده </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            @endforeach
        </div>
    </div>


</section>
