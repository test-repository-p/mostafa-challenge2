<div class="container-fluid ideabook-container">
    <div class="container">
        <div class="modular_module ">
            <div class="mod-article">
                 <div class="caption">
                            <div class="title-box">
                                <span class="ball-title-small"></span>
                                <span class="ball-title"></span>
                                <span class="title-space"><span class="foroshande"></span>آخرین نوشته های مجله را بخوانید</span>
                                <span class="ball-title"></span>
                                <span class="ball-title-small"></span>
                            </div>
                        </div>
                <div class="scroll-holder">
                    <div class="row">

                    @foreach ($posts as $post)
                        <div class="col-xs-12 col-sm-4 ">
                            <a href="{{route('news',$post->slug)}}"
                                class="article-holder">
                                <div>
                                <img width="384" height="271" class="img-rounded" alt="{{$post->title}}" data-src="{{$post->photo->path}}" src="uploads/368-235-default.png" />
                                    <h5>
                                        <span> {{$post->title}} </span>
                                    </h5>
                                <span class="load-more" href="{{route('news',$post->slug)}}">بیشتر بخوانید </span>
                                    <div class="clearfix"></div>
                                </div>
                            </a>
                        </div>
                    @endforeach






                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
