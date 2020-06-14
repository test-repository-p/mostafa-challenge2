<?php

namespace App;

use App\Presenters\Contracts\Presentable;

use App\Presenters\User\UserPresenter;
use Elasticquent\ElasticquentTrait;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable implements MustVerifyEmail
{
    use ElasticquentTrait, Notifiable, Presentable;

    protected $presenter = UserPresenter::class;



    protected $mappingProperties = array(
        'name' => [
            'type' => 'string',
            "analyzer" => "standard",
        ],
        'email' => [
            'type' => 'string',
            "analyzer" => "standard",
        ],
    );

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function photos()
    {
        return $this->hasMany(Photo::class);
    }

    public function products()
    {
        return $this->hasMany(Product::class);
    }

    public function roles()
    {
        return $this->belongsToMany(Role::class);
    }


    public function logs()
    {
        return $this->hasMany(Log::class);
    }


    public function avatar()
    {
        return $this->belongsTo(Photo::class, 'photo_id', 'id');
    }

    public function isAdmin()
    {
        foreach ($this->roles as $role) {
            if ($role->title == 'مدیر') {
                return true;
            }
        }
        return false;
    }

    public function isUser()
    {
        foreach ($this->roles as $role) {
            if ($role->title == Role::UserRole) {
                return true;
            }
        }
        return false;
    }

    public function posts()
    {
        return $this->hasMany(Post::class);
    }

    //    public function getRouteKeyName()
    //    {
    //        return 'name';
    //    }
}
