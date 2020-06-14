<?php

namespace App\Presenters\Contracts;

use Exception;

trait Presentable
{

    /* This is where we will save the presenterInstance so use later on the same model object */
    protected $presenterInstance;

    public function present()
    {
        if (!$this->presenter || !class_exists($this->presenter)) {
            throw new Exception('Presenter not found');
        }

        // dd($this->presenter);
        // dd($this);

        // The good old Singleton pattern
        if (!$this->presenterInstance) {
            //Set __construct; ==> abstract class Presenter.php
            $this->presenterInstance = new $this->presenter($this);
        }

        return $this->presenterInstance;
    }
}
