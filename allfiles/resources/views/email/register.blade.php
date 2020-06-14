<!DOCTYPE html>
<html>
<head>
</head>
<body style="direction: rtl;">

<center>
    <h2 style="padding: 23px;background: #b82f2b;border-bottom: 6px blue solid;">
        <a style="color:white" href="{{route('profile')}}">مبل آباد</a>
    </h2>
</center>

<p>  خوش آمدید {{$data->name}}  </p>
<p>
    لطفا روی لینک زیر کلیک نمایید
    <br>

    <a href="{{route('email.active',$data->verifycode)}}">تایید ایمیل</a>
</p>
<br><br><br><br>
<strong>با تشکر</strong>

</body>
</html>
