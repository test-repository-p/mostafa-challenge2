<?php

namespace App\Providers;

use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;
use App\Repositories\Contracts\StatisticsRepositoryInterface;
use App\Repositories\Eloquent\Statistics\EloquentStatisticsRepository;
use Illuminate\Support\Facades\Auth;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(StatisticsRepositoryInterface::class, EloquentStatisticsRepository::class);
        
        View::composer('*', function ($view) {
            $user = Auth::user();
            $view->with('user',$user);
        });
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Schema::defaultStringLength(191);
    }
}   
