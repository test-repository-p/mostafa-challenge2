@extends('frontend.layout.master')

@section('content')
<script>
    var boxes = '';

</script>

<div class="inner-container">
    <div class="container-fluid full-background">
        <div class="modular-body">
            <div>
                <div class="modular_module ">
                    <div class="general-category-header">
                        <div class="container">
                            <h1>سوالات متداول</h1>
                            <ol class="breadcrumb">
                                <li><a>فروشگاه اینترنتی اچ پی کنون سنتر</a></li>
                                <li><a href="{{URL::current()}}">سوالات متداول</a></li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>



<div class="container">
    <div class="container full-background" id="contentContainer">
        <div class="content-container">
            <div class="content-body">
                <div id="content_holder">
                    <div class="container-fluid text-center">
                        <div class="row">
                            <div class="col-md-6 col-sm-6 col-xs-12 about">
                                <p>اچ پی کنون سنتر&nbsp;که یکی از زیرمجموعه های شرکت اکتیران (Octiran) است با ایجاد شبکه‌ای سیستماتیک برای ارتباط میان ذینفعان حوزه اچ پی، دکوراسیون و معماری داخلی بر بستر فن‌آوری روز این امکان را فراهم کرده که عرضه‌کنندگان کالا و ارائه‌کنندگان خدمات به‌آسانی با مخاطبان و مصرف‌کنندگان خود ارتباط مؤثر و دوسویه برقرار نمایند.</p>
                                <p>پلت فرم جامع اچ پی کنون سنتر ترکیبی است از یک فروشگاه بزرگ اینترنتی محصولات حوزه اچ پی که عرضه‌کنندگان این محصولات می‌توانند با استفاده از امکانات آن محصولات خود را به بازار عرضه کرده و به فروش رسانند، یک شبکه اجتماعی تخصصی که پروفایل و صفحات آن به‌وسیله خود مشارکت‌کنندگان ایجاد، مدیریت و به‌روزآوری می‌شود و یک بخش محتوایی به نام بخش مطالب که نقش رسانه‌ای برای اطلاع‌رسانی و انتقال دانش و تجربه را ایفا می‌کند.</p>
                            </div>
                            <div class="col-md-6 col-sm-6 col-xs-12 vdo">
                                <div class="video">
                                    <div class="play">
                                        <p>&nbsp;</p>
                                    </div><img alt="moblabad.com" class="img-responsive vd" src="/uploads/moblabadab.jpg">
                                </div>
                            </div>
                        </div>





                        <div class="row">
                            <div class="col-md-12">
                                <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                    <div class="panel panel-default">
                                        <div class="panel-heading" role="tab" id="headingOne">
                                            <h4 class="panel-title">
                                                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    Why you choose Titanic?
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                            <div class="panel-body">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="panel panel-default">
                                        <div class="panel-heading" role="tab" id="headingTwo">
                                            <h4 class="panel-title">
                                                <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    Why Titanic best?
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                            <div class="panel-body">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="panel panel-default">
                                        <div class="panel-heading" role="tab" id="headingThree">
                                            <h4 class="panel-title">
                                                <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    How to apply Titanic jobs?
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                            <div class="panel-body">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="panel panel-default">
                                        <div class="panel-heading" role="tab" id="headingFour">
                                            <h4 class="panel-title">
                                                <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                    How experts Titanic team member?
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseFour" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
                                            <div class="panel-body">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="panel panel-default">
                                        <div class="panel-heading" role="tab" id="headingFive">
                                            <h4 class="panel-title">
                                                <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                    How Titanic give customer support?
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseFive" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive">
                                            <div class="panel-body">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--- END COL -->
                        </div>
                        <!--- END ROW -->



                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
    (function($) {
        'use strict';

        jQuery(document).on('ready', function() {

            $('a.page-scroll').on('click', function(e) {
                var anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: $(anchor.attr('href')).offset().top - 50
                }, 1500);
                e.preventDefault();
            });

        });


    })(jQuery);

</script>
@endsection
