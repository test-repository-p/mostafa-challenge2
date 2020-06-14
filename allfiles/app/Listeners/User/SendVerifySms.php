<?php

namespace App\Listeners\User;

use App\Events\User\UserCreateEvent;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Ipecompany\Smsirlaravel\Smsirlaravel;

class SendVerifySms
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  UserCreateEvent  $event
     * @return void
     */
    public function handle(UserCreateEvent $event)
    {
        //        dd($event->user->verifycode);
        Smsirlaravel::send('خرسندیم که به فروشگاه اینترنتی اچ پی کنون پیوستید . کد تاییده شما : ' . $event->user->verifycode, $event->user->phone);
    }
}
