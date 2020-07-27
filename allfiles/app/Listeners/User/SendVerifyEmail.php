<?php

namespace App\Listeners\User;

use App\Events\User\UserCreateEvent;
use App\Mail\sendRegisterActivation;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Facades\Mail;

class SendVerifyEmail
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
        Mail::to($event->user)->send(new sendRegisterActivation($event->user));

    }
}
