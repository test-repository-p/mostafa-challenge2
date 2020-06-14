<?php


namespace App\Repositories\Eloquent\Statistics;


use App\Repositories\Contracts\StatisticsRepositoryInterface;

class EloquentStatisticsRepository implements StatisticsRepositoryInterface
{


    public function totalPay()
    {
        return 0;
    }

    public function todayTotalTransactions()
    {
        return 0;
    }

    public function totalUserPending()
    {
        return 156;
    }
}