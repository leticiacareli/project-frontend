<?php
namespace app\controller;

use app\database\Query;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

class HomeController 
{
    public function index(Request $request, Response $response)
    {
        $query = new Query;
        $albums = $query->select('albums', 'id, album_cover, album_name, artist, release_year')->order('order by album_name asc')->get();
        // var_dump($albums);
        view('home', ['title' => 'Página Inicial', 'albums' => $albums]);

        return $response;
    }
}