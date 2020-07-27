<?php


namespace App\Presenters\Contracts;


abstract class Presenter
{
    protected $entity;

    public function __construct($entity)
    {
        $this->entity = $entity;
        // dd($this);
    }


    public function __get($property)
    {
        // dd($this);
        if (method_exists($this, $property)) return $this->{$property}();
        return $this->entity->{$property};
    }

}