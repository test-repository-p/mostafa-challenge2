<?php

namespace App;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    const UserRole = 'کاربر';
    const AdminRole = 'مدیر';

    public function users()
    {
        return $this->belongsToMany(User::class);
    }

    public function get()
    {
        
    }
}
