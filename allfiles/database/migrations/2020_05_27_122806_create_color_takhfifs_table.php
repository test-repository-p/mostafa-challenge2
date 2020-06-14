<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateColorTakhfifsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('color_takhfifs', function (Blueprint $table) {
            $table->increments('id');
            $table->string('color_title')->nullable();
            $table->string('color_value')->nullable();
            $table->string('color_id')->nullable();
            $table->string('discount')->nullable();
            $table->string('product_id')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('color_takhfifs');
    }
}
