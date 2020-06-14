<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use ScoutElastic\Searchable;

class Users extends Model
{
    use Searchable;

    /**
     * @var string
     */
    protected $indexConfigurator = null;

    /**
     * @var array
     */
    protected $searchRules = [
        //
    ];

    /**
     * @var array
     */
    protected $mapping = [
        //
    ];
}