<?php

use Slim\App;

use app\controller\HomeController;

return function(App $app){

    $app->get('/', [HomeController::class, 'index']);
};