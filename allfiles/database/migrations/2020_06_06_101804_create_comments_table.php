<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCommentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('comments', function (Blueprint $table) {

            $table->increments('id');
            $table->string('product_id');
            $table->string('user_id')->nullable();
            $table->string('name')->nullable();
            $table->string('site_id');
            $table->string('lang_id');
            $table->string('email')->nullable();
            $table->string('subject')->nullable();
            $table->text('des')->nullable();
            $table->string('status')->default(1);
            $table->string('like')->default(0);
            $table->string('deslike')->default(0);
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
        Schema::dropIfExists('comments');
    }
}
