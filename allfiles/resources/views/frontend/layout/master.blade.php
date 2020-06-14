<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml" dir="rtl" lang="fa">

<head>
    <title>فروشگاه اینترنتی HP Canon Center</title>
    @include('layouts.head')
</head>

<body style="overflow-x: hidden" class="is-not-login rtl modular view modular-view">
    <div class="container-fluid maincont">
        <div id="dark"></div>
        <div class="header-2018">
            @include('layouts.header')
        </div>

        @yield('content')

        @include('layouts.footer')
        <script src="/assets/js/main.js" type="text/javascript"></script>
</body>

</html>