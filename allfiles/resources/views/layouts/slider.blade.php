<div class="container-fluid white-background">
    <div class="carousel slide" id="home-page-carousel" data-ride="carousel">
        <div class="carousel-inner" role="listbox">

            @foreach ($sliders as $slider)

                @if ($loop->first)
                    <div class="modular_module item active">
                        <div class="item slide mod_simple_box">
                            <a href="#">
                                <div class="container-fluid">
                                    <img src="{{$slider->photo->path}}" alt="Mehr-table"/>
                                </div>
                            </a>
                        </div>
                    </div>
                @else

                    <div class="modular_module item ">
                        <div class="item slide mod_simple_box">
                            <a href="#">
                                <div class="container-fluid">
									<img src="{{$slider->photo->path}}" alt="spana"/>
                                </div>
                            </a>
                        </div>
                    </div>

                @endif

            @endforeach


        </div>
        <a class="left carousel-control" href="#home-page-carousel" role="button"
           data-slide="prev">
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                 xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                 viewbox="0 0 477.175 477.175" style="enable-background:new 0 0 477.175 477.175;"
                 xml:space="preserve">
                        <g>
                            <path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225
               c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z">
                        </g>
                    </svg>

            <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#home-page-carousel" role="button"
           data-slide="next">
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                 xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                 viewbox="0 0 477.175 477.175" style="enable-background:new 0 0 477.175 477.175;"
                 xml:space="preserve">
                        <g>
                            <path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5
               c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z
               ">
                        </g>
                    </svg>
            <span class="sr-only">Next</span>
        </a>
    </div>
</div>

