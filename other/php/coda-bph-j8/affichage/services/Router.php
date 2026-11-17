<?php
class Router{
    public function handleRequest(array $get): void{
        $blogController = new BlogController();
        if (isset($get['path'])){
            $url = explode("/", $get['path']);
            $article = $url[1];
            if ($url[0] !== "article"){
                $blogController->notFound();
            }

            else{
                $blogController->article((int)$article);
            }
        }

        else{
            $blogController->index();
        }
    }
}