$(document).ready(function () {
    $('#category_box_298').bcSwipe({
        threshold: 50
    });
    $('#category_box_298').on('slide.bs.carousel', function () {
        var t = $(this);
        setTimeout(function () {
            t.find('img').unveil()
        }, 500)
    })
})
var ajaxSearchLoaded = !1;
$(document).ready(function () {
    $("img").unveil();
    $('.top-fix-nav-holder').find('img[data-src]').each(function () {
        $(this).attr('src', $(this).data('src'))
    })
});
var loadImageFunc = function (img) {
    if (img.data('src_loaded'))
        return;
    img.attr('src', img.data('src')).data('src_loaded', !0)
};
var testFaze = !0;

function showMessage(dest, msg) {
    $('#' + dest).find('span').html(msg);
    $('#' + dest).fadeIn('slow');
    setTimeout(function () {
        hideGeneralMessage(dest)
    }, 3000)
}

function hideGeneralMessage(dest) {
    $('#' + dest).fadeOut('slow', function () {
        $('#' + dest).find('span').html('')
    })
}
var ids = 0;
var types = 0;

function loadChangePass() {
    $('#general-modal').find('.modal-body').load('/fa/auth/change-Password/format/html');
    $('#general-modal').find('.modal-title').text('تغییر رمز عبور');
    $('#general-modal').modal('show')
}(function ($) {
    if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Mac') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {}
})(jQuery);

$(document).ready(function () {
    $('.login-trigger').click(function () {
        if ($('body').hasClass('khooger-loading'))
            return;
        if ($('#register_popup').length == 0) {
            $.ajax({
                url: "/api/registerpop",
                type: "GET",
                beforeSend: function () {},
                success: function (res, status, xhr) {

                    $('body').addClass('khooger-loading');
                    $('body').append(res.data);
                    $('body').removeClass('khooger-loading');

                },
                error: function () {

                }
            }); //ajax 
        }
    });

    if (window.location.hash && window.location.hash.substring(1) === 'register') {
        $('.login-trigger').trigger('click')
    }
})


var OneSignal = window.OneSignal || [];
OneSignal.push(["init", {
    appId: "c88d4593-e630-4a0a-8326-e8eea6677976",
    autoRegister: !1,
    httpPermissionRequest: {
        enable: !1
    },
    notifyButton: {
        enable: !1
    },
    promptOptions: {
        actionMessage: "برای اطلاع از آخرین تخفیفات و جشنواره فروش بر روی بلی کلیک کنید ",
        acceptButtonText: "بلی",
        cancelButtonText: "شاید بعدا"
    },
    welcomeNotification: {
        "title": "خوگر",
        "message": "با تشکر از شما، از این به بعد از آخرین تخفیفات و جشنواره های فروش مطلع می شوید",
    }
}]);
$(document).ready(function () {
    checkLoaded()
});
var checkLoaded = function () {
    try {
        var b = +new Date();
        if ($.cookie('onesignal-notification-prompt') == "dismissed" && !1) {
            b = b - (3 * 24 * 60 * 60);
            if ($.cookie('khooger-dismiss-popup-date') != undefined || parseInt($.cookie('khooger-dismiss-popup-date')) > b) {} else {
                if (Notification.permission != 'granted')
                    $.removeCookie('onesignal-notification-prompt')
            }
        }
        $.cookie('khooger-dismiss-popup-date', b, {
            expires: 7
        });
        OneSignal.showHttpPrompt()
    } catch (e) {
        setTimeout(checkLoaded, 1000)
    }
}
jQuery.curCSS = jQuery.css;

function url_redirect(options) {
    var $form = $("<form/>");
    $form.attr("action", options.url);
    $form.attr("method", options.method);
    for (var data in options.data)
        $form.append('<input type="hidden" name="' + data + '" value="' + options.data[data] + '"/>');

    $("body").append($form);
    $form.submit();
}
if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
    $('html').addClass('safari')
}


(function (h, e, a, t, m, p) {
    m = e.createElement(a);
    m.async = !0;
    m.src = t;
    p = e.getElementsByTagName(a)[0];
    p.parentNode.insertBefore(m, p)
})
(window, document, 'script', 'https://u.heatmap.it/log.js');
var lang = {
    'left': 'چپ',
    'right': 'راست',
    'person': 'نفره',
    'categories': 'دسته بندی ها',
    'products': 'محصولات',
    'comment_select_value': 'برای این فیلد یک مقدار انتخاب کنید',
    'price': 'قیمت',
    'show_product_list': 'مشاهده محصولات',
    'cart_is_empty': 'سبد خرید شما خالی است',
    'remove': 'حذف',
    'product_name': 'نام محصول',
    'count_string': 'تعداد',
    'price': 'قیمت',
    'submit_order': 'نمایش سبد خرید',
    total_price: 'قیمت کل'
}
var userLoggedIn = !1
