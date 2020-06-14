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
                            <h1>درباره ما</h1>
                            <ol class="breadcrumb">
                                <li><a>فروشگاه اینترنتی اچ پی کنون سنتر</a></li>
                                <li><a href="{{URL::current()}}">درباره ما</a></li>
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

                                <p>اچ پی کنون سنتر&nbsp;که یکی از زیرمجموعه های شرکت اکتیران (Octiran) است با ایجاد شبکه‌ای سیستماتیک برای ارتباط میان ذینفعان حوزه hp، دکوراسیون و معماری داخلی بر بستر فن‌آوری روز این امکان را فراهم کرده که عرضه‌کنندگان کالا و ارائه‌کنندگان خدمات به‌آسانی با مخاطبان و مصرف‌کنندگان خود ارتباط مؤثر و دوسویه برقرار نمایند.</p>
                                <p>پلت فرم جامع اچ پی کنون سنتر ترکیبی است از یک فروشگاه بزرگ اینترنتی محصولات حوزه hp که عرضه‌کنندگان این محصولات می‌توانند با استفاده از امکانات آن محصولات خود را به بازار عرضه کرده و به فروش رسانند، یک شبکه اجتماعی تخصصی که پروفایل و صفحات آن به‌وسیله خود مشارکت‌کنندگان ایجاد، مدیریت و به‌روزآوری می‌شود و یک بخش محتوایی به نام بخش مطالب که نقش رسانه‌ای برای اطلاع‌رسانی و انتقال دانش و تجربه را ایفا می‌کند.</p>
                            </div>
                            <div class="col-md-6 col-sm-6 col-xs-12 vdo">
                                <div class="video">
                                    <div class="play">
                                        <p>&nbsp;</p>
                                    </div><img alt="moblabad.com" class="img-responsive vd" src="/uploads/moblabadab.jpg">
                                </div>
                            </div>
                            <div class="col-md-12 col-sm-12 col-xs-12 about">
                                <p>بخش فروشگاه اینترنتی وب‌سایت اچ پی کنون سنتر اتفاقی تازه را که جای آن در صنعت hp خالی بود رقم‌زده است. این اتفاق ایجاد یک پایگاه اطلاعاتی از کالاهای قابل‌دسترس در حوزه hp است که امکان مشاهده، مقایسه، انتخاب و خریداری کالای hp و دکوراسیون از برندهای مختلف را به متقاضی این کالاها می‌دهد.</p>
                                <p>شبکه اجتماعی تخصصی اچ پی کنون سنتر این امکان را برای طراحان داخلی و سایر ارائه‌کنندگان خدمات در حوزه معماری و دکوراسیون فراهم می‌کند که با ایجاد صفحه اختصاصی برای خودشان از قابلیت‌های این پایگاه برای اطلاع‌رسانی و دسترسی به مخاطب استفاده کنند. نمایش اطلاعات تماس، توضیح در خصوص فعالیت‌ها، ایجاد گالری‌های متعدد برای نمایش پروژه‌ها، امکان دنبال شدن و دنبال کردن فعالیت‌ها (follow)، دریافت نظرات و سؤالات مخاطبان و امکان پاسخگویی به آن از طریق این فضا و امکان ارسال لینک تصاویر با پست الکترونیک یا از طریق اپلکیشن های متداول گوشی‌های هوشمند برخی از امکانات بهره‌برداری از این فضا هستند.</p>
                                <p>بخش مطالب اچ پی کنون سنتر سازوکاری نظیر یک وبلاگ گروهی را دارد که کلیه طراحان عضو در شبکه اجتماعی اچ پی کنون سنتر در کنار تحریریه اچ پی کنون سنتر می‌توانند مطالب مناسب مرتبط با صنعت یا فعالیت خود را در آن درج نمایند. نمایش این مطالب بر اساس دسته‌بندی مناسب می‌تواند برای کاربران نهایی سایت و سایر فعالان حوزه جذابیت داشته و دانش عمومی در این حوزه را افزایش دهد.</p>
                                <p>سایت اچ پی کنون سنتر با ایجاد نسخه ریسپانسیو اچ پی کنون سنتر و طراحی اپلیکیشن های Android و iOS اچ پی کنون سنتر باعث شده تا دسترسی آسان به اطلاعات این سایت از طریق هر نوع ابزار دیجیتال به‌سرعت و باقابلیت بالا انجام شود.</p>
                            </div>
                            <div class="col-md-12 col-sm-12 col-xs-12 section3">
                                <h3>اچ پی کنون سنتر چگونه کار می کند</h3>
                                <div class="col-md-3 col-sm-3 col-xs-12 buy">

                                    <div class="aboutimg">
                                        <img alt="moblabad.com" class="img-responsive" src="/uploads/buy.png">
                                    </div>

                                    <span>فروشگاه اینترنتی اچ پی کنون سنتر</span>
                                    <p>
                                        در فروشگاه اینترنتی اچ پی کنون سنتر محصولات متنوع از تأمین‌کنندگان معتبر hp خانگی و اداری با اطلاعات کامل و قیمت روز عرضه‌شده است
                                        .</p>
                                    <a href="" title="moblabad"></a>
                                </div>
                                <div class="col-md-3 col-sm-3 col-xs-12 partt">

                                    <div class="aboutimg">
                                        <img alt="moblabad.com" class="img-responsive" src="/uploads/tamin.png">
                                    </div>

                                    <span>خدمات تامین کنندگان</span>
                                    <p>از طریق اچ پی کنون سنتر تامین کنندگان می توانند کالاهای خود را سریع تر، آسان ترو کم هزینه به مشتریان آن عرضه نمایند.</p><a href="#" title="moblabad"></a>
                                </div>
                                <div class="col-md-3 col-sm-3 col-xs-12 pro">
                                    <div class="aboutimg">
                                        <img alt="moblabad.com" class="img-responsive" src="/uploads/designers.png">
                                    </div>
                                    <span>بخش طراحان</span>
                                    <p>در این بخش افراد و شرکت‌های عرضه‌کننده خدمات تخصصی در حوزه معماری و دکوراسیون می‌توانند با ایجاد پروفایل اختصاص.</p>
                                    <a href="/_upload/userfiles/files/pro-guide/index.html" title="moblabad"></a>
                                </div>


                                <div class="col-md-3 col-sm-3 col-xs-12 pro">
                                    <div class="aboutimg">
                                        <img alt="moblabad.com" class="img-responsive" src="/uploads/picture.png">
                                    </div>
                                    <span>بخش تصاویر</span>
                                    <p>بخش تصاویر راهی برای دسترسی علاقه‌مندان به استفاده از خدمات طراحان بر اساس حوزه‌ای است که موردنیازشان است.</p><a href="/_upload/userfiles/files/pro-guide/index.html#project" title="moblabad"></a>
                                </div>
                            </div>
                            <div class="col-md-12 col-sm-12 col-xs-12 section2">
                                <div class="col-md-12 col-sm-12 col-xs-12 first">
                                    <h3>&nbsp;</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="clear content-clear"></div>
        </div>
    </div>
</div>


@endsection
