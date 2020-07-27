<?php

namespace App\Presenters\User;

use App\Presenters\Contracts\Presenter;

class UserPresenter extends Presenter
{
    public function status()
    {
        return 'فعال';
    }
}