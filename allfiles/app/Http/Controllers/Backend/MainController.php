<?php

namespace App\Http\Controllers\Backend;

use App\Repositories\Contracts\StatisticsRepositoryInterface;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class MainController extends Controller
{
    /**
     * @var StatisticsRepositoryInterface
     */
    private $statisticsRepository;


    /**
     * MainController constructor.
     * @param StatisticsRepositoryInterface $statisticsRepository
     */
    public function __construct(StatisticsRepositoryInterface $statisticsRepository)
    {
        $this->statisticsRepository = $statisticsRepository;
    }

    public function mainPage()
    {
        $statistics = new \stdClass();
        $statistics->totalPay = $this->statisticsRepository->totalPay();
        $statistics->todayTotalTransactions = $this->statisticsRepository->todayTotalTransactions();
        $statistics->totalUserPending = $this->statisticsRepository->totalUserPending();

        return view('admin.main.index', compact('statistics'));
    }
}
