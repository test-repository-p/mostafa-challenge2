<?php


namespace App\Repositories\Contracts;


interface StatisticsRepositoryInterface
{

    public function totalPay();

    public function todayTotalTransactions();

    public function totalUserPending();

}