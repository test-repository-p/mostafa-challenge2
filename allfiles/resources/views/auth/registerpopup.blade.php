<div class="popUpContainer popUpShow" id="register_popup">
    <div>
        <div class="login-column hide-class col-md-6">
            <a type="button" id="closePopup" class="btn closepopup"></a>
            <h2 class="login-header">
                به جمع خانواده اچ پی کنون سنتر بپیوندید</h2>
            <div class="col-md-12">
                <form id="login_form" action="{{ route('login') }}" method="post">
                    @csrf
                    <div class="form-group">
                        <label class="sr-only" for="idOrEmail">
                            پست الکترونیک
                        </label>
                        <input required="" name="email" type="text" class="form-control registerinputs" id="idOrEmail" placeholder="پست الکترونیک">
                    </div>
                    <div class="form-group">
                        <label class="sr-only" for="loginPassword">رمز عبور</label>
                        <input required="" name="password" type="password" class="form-control registerinputs" id="loginPassword" placeholder="رمز عبور">
                    </div>
                    <div class="checkbox rememberme">
                        <label>
                            <input type="checkbox" name="remember_me" value="1">
                            مرا به خاطر بسپار
                        </label>
                    </div>
                    <button type="submit" class="btn login-submit-button">
                        ورود</button>
                </form>
            </div>
            <div class="col-md-12 lost-password pb-5 text-center">
                <a href="/auth/resetpass"> رمز عبورم را فراموش کرده ام</a>
            </div>
            <div class="col-md-12 pb-5 ">

                <div class="col-md-12 logincheck text-center">
                    <p>
                        قبلا در سایت ثبت نام نکرده اید؟ <br><a id="check-new-user">ثبت نام در اچ پی کنون سنتر</a>
                    </p>
                </div>

            </div>
        </div>

    </div>
    <div class="popUpWrapper">
        <div class="col-md-6 popupregisterwrapper">
            <div class="row">
                <div class="scroll-wrapper rightColumn scrollbar-macosx" style="position: relative;">
                    <div class="rightColumn scrollbar-macosx scroll-content" style="height: 512px; margin-bottom: -12px; margin-right: 0px; max-height: none;">

                        <h2 style="margin-top: 20px;" class="col-md-12 joinheader">به جمع خانواده اچ پی کنون سنتر بپیوندید</h2>
                        {{-- <a type="button" id="closePopup" class="btn closepopup"></a> --}}


                        <div class="col-md-12">
                            <form id="register_form" action="{{route('user.register')}}" autocomplete="off" method="post">
                                @csrf

                                <div class="form-group">
                                    <label class="sr-only" for="nameInput">
                                        نام و نام خانوادگی
                                    </label>
                                    <input type="text" class="form-control registerinputs" id="nameInput" placeholder="نام و نام خانوادگی" name="name" required="">
                                </div>
                                <div class="form-group">
                                    <label class="sr-only" for="emailAddress">
                                        پست الکترونیک </label>
                                    <input style="display:none" type="text" name="email">
                                    <input type="email" class="form-control registerinputs" id="emailAddress" placeholder="پست الکترونیک" required="" name="email">
                                </div>
                                <div class="form-group">
                                    <label class="sr-only" for="passwordInput">
                                        رمز عبور </label>
                                    <input style="display:none" type="password" name="password">

                                    <input type="password" class="form-control registerinputs" id="passwordInput" placeholder="رمز عبور" required="" name="password">
                                </div>

                                <div class="form-group">
                                    <label class="sr-only" for="mobile">شماره موبایل</label>
                                    <input name="mobile" type="text" class="form-control registerinputs" id="mobile" required="" placeholder="شماره موبایل">
                                </div>

                                <div class="checkbox">
                                    <label class="newsletterCheck">
                                        <input name="recieve_news_letter" value="1" type="checkbox">
                                        خبرنامه اچ پی کنون سنتر را برای من ارسال کنید </label>
                                </div>
                                <div>

                                    <input type="hidden" name="csrf" value="608b005851af5caa13f775bd24b4c969" required="true" id="csrf"></div>

                                <button type="button" class="btn regsubmitbutton">
                                    ثبت نام</button>
                            </form>
                        </div>
                        <div class="col-md-12 previous-reg">
                            <p>

                                قبلا در سایت ثبت نام کرده اید؟&nbsp;<a id="check-register">وارد شوید</a> </p>
                        </div>

                    </div>
                    <div class="scroll-element scroll-x" style="">
                        <div class="scroll-element_outer">
                            <div class="scroll-element_size"></div>
                            <div class="scroll-element_track"></div>
                            <div class="scroll-bar" style="width: 98px;"></div>
                        </div>
                    </div>
                    <div class="scroll-element scroll-y" style="">
                        <div class="scroll-element_outer">
                            <div class="scroll-element_size"></div>
                            <div class="scroll-element_track"></div>
                            <div class="scroll-bar" style="height: 96px;"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-6 popupsmswrapper rightColumn not-show">
            <a type="button" id="closePopup" class="btn closepopup"></a>
            <h2 class="login-header">
                تایید شماره تلفن همراه</h2>
            <form id="sms_form" action="{{route('sms.verify')}}" method="post">
                @csrf
                <div class="form-group sms__inputs-group">
                    <label for="smsCode">
                        کد تایید </label>
                    <input required="" name="smsCode" type="text" class="sms__inputs" maxlength="5">
                </div>
                <p>
                    <span class="sms__counter-down">05:00</span>
                    <button class="btn btn-link sms__resend-code" type="button" disabled="">
                        ارسال مجدد</button>
                </p>
                <button type="button" class="btn sms-submit-button">
                    بررسی</button>
            </form>
            <p class="msgmobile"></p>
        </div>
        <div class="leftColumn hidden-xs col-md-6">
            <div class="row">
                <h1 class="col-md-12 benefitheader">
                    ویژگی عضویت در اچ پی کنون سنتر</h1>
                <div class="benefitItem row">
                    <div class="benefitItem_1 col-md-2"></div>
                    <div class="col-md-10">
                        <p class="benefitTexts">
                            آسان و سریع محصولات مورد نظرتان را انتخاب، مقایسه و خرید کنید</p>
                    </div>
                </div>
                <div class="benefitItem row">
                    <div class="benefitItem_2 col-md-2"></div>
                    <div class="col-md-10">
                        <p class="benefitTexts">
                            از آخرین اخبار، فروش های ویژه و مطالب متنوع در حوزه مبلمان و دکوراسیون داخلی مطلع شوید</p>
                    </div>
                </div>
                <div class="benefitItem row">
                    <div class="benefitItem_3 col-md-2"></div>
                    <div class="col-md-10">
                        <p class="benefitTexts">
                            تجربیات و نظرات خود را در مورد محصولات و مطالب با دیگران به اشتراک بگذارید</p>
                    </div>
                </div>
                <div class="benefitItem row">
                    <div class="benefitItem_4 col-md-2"></div>
                    <div class="col-md-10">
                        <p class="benefitTexts">
                            نمونه کارها و مطالب تولیدی خودتان را در شبکه اجتماعی اچ پی کنون سنتر با متخصصان به اشتراک بگذارید</p>
                    </div>
                </div>
                <div class="laptopImg">
                    <img src="/uploads/laptopComfy-khooger.png">
                </div>
            </div>

        </div>
    </div>
</div>

<script type="text/javascript">
    $('.sms__inputs').keyup(function(e) {
        if (this.value.length == 5) {
            $(".sms-submit-button").focus();
        }
    });


    $('.login-trigger').on('click', function(event) {
        event.preventDefault();
        $('.popUpContainer').addClass('popUpShow');
        $('.popUpWrapper').removeClass('hide-class');
        $('body').addClass('body-no-scroll hide-intercom');
    });

    $('#check-register').on('click', function(event) {
        event.preventDefault();
        $('.popUpWrapper').addClass('hide-class');
        $('.login-column').removeClass('hide-class');
    });

    $('#check-new-user').on('click', function(event) {
        event.preventDefault();
        $('.login-column').addClass('hide-class');
        $('.popUpWrapper').removeClass('hide-class');
    });

    $('.popUpContainer').on('click', function(event) {
        if ($(event.target).is('#closePopup') || $(event.target).is('.popUpContainer')) {
            event.preventDefault();
            $(this).removeClass('popUpShow');
            $('body').removeClass('body-no-scroll hide-intercom');
        }
    });
    $('#register_popup .scrollbar-macosx').scrollbar();
    $('.regsubmitbutton').click(function() {

        if ($("#nameInput").val() == "" || $("#passwordInput").val() == "" || $("#emailAddress").val() == "" || $("#mobile").val() == "") {
            alert("لطفا تمامی فیلد ها را تکمیل نمایید.")
            return;
        }


        $('#register_form').addClass('khooger-loading')
        $.ajax({
            datatype: 'json'
            , data: getFormInputVals("#register_form")
            , type: 'POST'
            , url: $("#register_form").attr('action')
            , beforeSend: function() {

            }
            , success: function(res) {
                $('#register_form').removeClass('khooger-loading')
                // console.log(res)
                if (res.error) {
                    // console.log(11)
                    $('#register_form').find('[name="csrf"]').val(res.csrf);
                    $('#register_form').find('small.error').remove();
                    for (var i in res.message) {
                        var el = $('#register_form').find('[name="' + i + '"]:last');
                        el.next().remove();
                        var div = $(document.createElement('small'));
                        div.css('color', 'red').addClass('error').text(res.message[i]).insertAfter(el);
                    }
                } else {
                    $('.popupregisterwrapper').addClass('not-show');
                    $('.popupsmswrapper').removeClass('not-show');

                    setInterval(function() {
                        var $el = $('.sms__counter-down');
                        var times = $el.text().split(':');
                        if (times.length === 2) {
                            var min = parseInt(times[0]);
                            var sec = parseInt(times[1]) - 1;
                            if (sec < 0) {
                                if (min > 0) {
                                    min--;
                                    sec = 59;
                                    $('.sms__resend-code').prop('disabled', true);
                                } else {
                                    sec = 0;
                                    $('.sms__resend-code').prop('disabled', false);
                                }
                            }

                            $el.text(("00" + min).slice(-2) + ':' + ("00" + sec).slice(-2));
                        }
                    }, 1000);

                }
            }
            , error: function() {

            }
        }); //ajax 
        return false;

    });

    $('.sms-submit-button').click(function() {
        $('#register_form').addClass('khooger-loading')
        $.ajax({
            datatype: 'json'
            , data: getFormInputVals("#sms_form")
            , type: 'POST'
            , url: $("#sms_form").attr('action'),

            beforeSend: function() {

            }
            , success: function(res) {
                $('#register_form').removeClass('khooger-loading')
                if (res.error) {
                    $(".msgmobile").html("خطایی در هنگام تایید شماره موبایل رخ داده است لطفا مجددا بررسی بفرمایید")
                } else {
                    $(".msgmobile").html("<span style='color:green;padding:8px'>عملیات با موفقیت انجام شد</span>")
                    setTimeout(function() {
                        window.location.href = "/login?emailverify=true"
                    }, 2000)
                }
            }
            , error: function() {

            }
        }); //ajax 
        return false;
    });
    var getFormInputVals = function(el) {
        var data = {};
        $(el).find('input').each(function() {
            var name = $(this).attr('name');
            if (name == '')
                return true;

            var type = $(this).attr('type');
            if (type == 'checkbox' && !$(this).is(':checked'))
                return true;

            data[name] = $(this).val();

        });
        return data;
    };
    $('.googleLogin').click(function() {
        var googlePopUp = window.open('/auth/login-with-google?' + new Date().getTime(), 'google-login', 'width=450,height=500,toolbar=0,menubar=0,location=0');
        if (window.focus) {
            googlePopUp.focus()
        }

    });

    $('.sms__resend-code').click(function() {
        var $el = $('.sms__counter-down');

        if ($el.text() === '00:00') {
            new ajaxclass({
                datatype: 'json'
                , type: 'POST'
                , url: '/auth/resend-sms/format/json'
                , success: function(res) {
                    if (!res.ok) {
                        alert(res.message);
                    } else {
                        $el.text('05:00')
                    }
                }
            }).send();
        }
    })

</script>
