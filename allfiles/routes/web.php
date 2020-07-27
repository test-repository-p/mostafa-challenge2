<?php

use App\Category;
use App\User;
use Illuminate\Support\Facades\Route;
use Ipecompany\Smsirlaravel\Smsirlaravel;


/*
 *
 * TEST ROUTES
 */

Route::get('/mostafa', function () {
    $ok = User::addAllToIndex();
    return $ok;
});

Route::get('/mostafa/s', function () {
    // $ok =  User::search('Admin');
    $ok =  User::searchByQuery([
        'multi_match' => [
            'query' => 'ali',
            'fields' => ["name^100", "email"]
        ],
    ]);

    return $ok;
});


Route::prefix('api')->group(function () {
    Route::get('/categories', 'Backend\CategoryController@apiIndex');
    Route::get('/mapdata', 'Frontend\HomeController@mapdata');
    Route::get('/pro', 'Frontend\HomeController@getSuggestproduct');
    Route::get('/registerpop', 'Frontend\HomeController@registerPopup');
    Route::get('/cutomerpop/', 'Frontend\HomeController@cutomerPopup');
    Route::post('/categories/attribute', 'Backend\CategoryController@apiIndexAttribute');
    Route::post('/getcentersliderproduct', 'Frontend\HomeController@senterSliderData')->name('sendSliderData');
});




/*
 * Administrator Dashboard
 */
Route::group(['middleware' => ['admin'], 'prefix' => 'administrator'], function () {
    Route::get('/', 'Backend\MainController@mainPage')->name('administrator');
    Route::resource('categories', 'Backend\CategoryController');
    Route::resource('menus', 'MenuController');
    Route::get('/categories/{id}/setting', 'Backend\CategoryController@indexSetting')->name('categories.indexSetting');
    Route::post('/categories/{id}/setting', 'Backend\CategoryController@saveSetting')->name('categories.setting');
    Route::resource('attributes-group', 'Backend\AttributeGroupController');
    Route::resource('attributes-value', 'Backend\AttributeValueController');
    Route::resource('brands', 'Backend\BrandController');
    Route::resource('colors', 'Backend\ColorController');
    Route::resource('sliders', 'Backend\SlidersController');
    Route::post('photos/upload', 'Backend\PhotoController@upload')->name('photos.upload');
    Route::resource('photo878s', 'Backend\PhotoController');
    Route::resource('products', 'Backend\ProductController');
    Route::resource('users', 'Backend\UserController');
    Route::resource('posts', 'Backend\PostController');
    Route::resource('postcategory', 'Backend\PostCategoryController');
});


/*
 * USER Routes
 */
Route::group(['middleware' => ['users'], 'prefix' => 'profile'], function () {
    Route::get('/', 'Profile\MainController@mainPage')->name('profile');
    Route::get('/userdata', 'Profile\MainController@userData')->name('user.data');
    Route::post('/userupdate/{id}', 'Profile\MainController@userUpdate')->name('user.update');
    Route::get('/plans', 'Profile\PlanController@index')->name('plans.index');
    Route::get('/offers', 'Profile\MainController@mainPage')->name('offers-page');
    Route::post('photos/upload', 'Profile\PhotoController@upload')->name('user.photos.upload');
    Route::resource('userproducts', 'Profile\ProductController');
    Route::get('logout', 'Auth\LoginController@logout')->name('userLogout');
});


Route::resource('/', 'Frontend\HomeController');
Route::post('/register-user', 'Frontend\UserController@register')->name('user.register');
Route::post('/sms-verify', 'Frontend\UserController@smsVerify')->name('sms.verify');
Route::get('/email/{verify}', 'Frontend\UserController@activeuser')->name('email.active');
Route::post('/getproductpackage/{id}', 'Backend\ProductController@getProductPackage')->name('getproductpackage');
Route::get('/getmodel/{colorid}/{pid}', 'Backend\ProductController@getmodel')->name('getmodel');
Route::get('/getmodelprice/{colorid}/{modelid}/{pid}', 'Backend\ProductController@getModelPrice')->name('getmodelprice');
Route::post('/storeComment/{pid}', 'Frontend\CommentController@store')->name('storecomment');


Route::get('/addmenu',function (){

    $categories = Category::with('child')->get();
    return $categories;
    
});
/*
 * Login Routes
*/
Route::get('login', 'Auth\LoginController@showLoginForm')->name('login');
Route::post('login', 'Auth\LoginController@login')->middleware('throttle:3:1');
Route::get('register', 'Auth\RegisterController@showRegistrationForm')->name('register');
Route::post('register', 'Auth\RegisterController@register');
Route::post('logout', 'Auth\LoginController@logout')->name('logout');

/*
 *
 */
//Auth::routes();



/*
 * General Route
 */
Route::get('/home', 'Frontend\HomeController@index')->name('home');
Route::get('/ali', 'Frontend\HomeController@ali')->name('ali');
Route::get('category/{slug}', 'Frontend\CategoryController@index')->name('categorypage');
Route::get('product/{slug}', 'Frontend\ProductController@index')->name('product.page');
Route::get('brand/{slug}', 'Frontend\BrandController@index')->name('brand.page');
Route::get('/درباره-ما', 'Frontend\HomeController@abouteUs')->name('aboutus');
Route::get('/تماس-با-ما', 'Frontend\HomeController@contactUs')->name('contactus');
Route::get('/فرصت-های-شغلی', 'Frontend\HomeController@cv')->name('cv');
Route::get('/قوانین-و-مقررات', 'Frontend\HomeController@term')->name('term');
Route::get('/سوالات-متداول', 'Frontend\HomeController@faq')->name('faq');
Route::get('/{username}', 'Frontend\HomeController@getCompanyAddress')->name('user.page');
Route::get('/اخبار/{title?}', 'Frontend\HomeController@news')->name('news');




/*
 * Route Model Binding   (Explicit Binding)
 */

Route::prefix('getuser')->group(function () {
    Route::get('{user}', function (\App\User $user) {
        return $user;
    });
});

Route::resourse('prd1','Frontend/prd_1/IndexController');