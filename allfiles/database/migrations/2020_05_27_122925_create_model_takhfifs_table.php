<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateModelTakhfifsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('model_takhfifs', function (Blueprint $table) {
            $table->increments('id');
            $table->string('model_title')->nullable();
            $table->string('model_value')->nullable();
            $table->string('model_id')->nullable();
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
        Schema::dropIfExists('model_takhfifs');
    }
}
