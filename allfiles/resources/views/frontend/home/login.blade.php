@extends('frontend.layout.master')

@section('content')

<script>
    var boxes = []

</script>





<div class="container-fluid white-background full-product-detail">
    <div class="container">
        <div class="row margin-top big-margin-bottom">

            <div class="col-sm-12">
                <div class="modular_module ">
                    <div class="last-products">
                        <div class="col" style="width: 50%;margin: auto;">
                            @isset($emailverify)
                            @if ($emailverify)
                            <div class="alert alert-success" role="alert">
                                <strong>{{ $emailverify }}</strong>
                            </div>
                            @endif
                            @endisset

                            @error('email')
                            <div class="alert alert-danger" role="alert">
                                <strong>{{ $message }}</strong>
                            </div>
                            @enderror

                            @if (session('verifyok'))
                            <div class="alert alert-success">
                                {{ session('verifyok') }}
                            </div>
                            @endif
                            @if (session('verifynotok'))
                            <div class="alert alert-danger">
                                {{ session('verifynotok') }}
                            </div>
                            @endif

                            @if (session('failedLogin'))
                            <div class="alert alert-danger">
                                {{ session('failedLogin') }}
                            </div>
                            @endif

                            <h2 class="col-sm-12 login-header">
                                به جمع خانواده اچ پی کنون سنتر بپیوندید</h2>
                            <div class="col-sm-12">

                                <form id="login_form" method="POST" action="{{ route('login') }}">
                                    @csrf

                                    <div class="form-group">
                                        <label class="sr-only" for="idOrEmail">
                                            پست الکترونیک
                                        </label>
                                        <input name="email" type="text" class="form-control registerinputs" id="idOrEmail" placeholder="پست الکترونیک" value="{{ old('email') }}" required autocomplete="email" autofocus>
                                    </div>
                                    <div class="form-group">
                                        <label class="sr-only" for="loginPassword">رمز عبور</label>
                                        <input name="password" type="password" class="form-control registerinputs" id="loginPassword" placeholder="رمز عبور" required autocomplete="current-password">
                                    </div>
                                    <div class="checkbox rememberme">
                                        <label>
                                            <input type="checkbox" name="remember_me" value="1">
                                            مرا به خاطر بسپار
                                        </label>
                                    </div>
                                    <button type="submit" class="btn login-submit-button">
                                        ورود
                                    </button>
                                </form>
                            </div>
                            <div class="col-sm-12 lost-password">
                                <a href="/auth/resetpass"> رمز عبورم را فراموش کرده ام</a>
                            </div>
                            <div class="col-sm-12">

                                <div class="col-sm-12 logincheck" style="text-align: center;">
                                    <p>
                                        قبلا در سایت ثبت نام نکرده اید؟&nbsp;<a href="{{route('register')}}" id="check-new-user">ثبت نام در اچ پی کنون سنتر</a></p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>







@endsection
