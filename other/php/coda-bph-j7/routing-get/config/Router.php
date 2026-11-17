<?php
class Router{
    public function handleRequest(array $get): void{
        if (isset($get["route"])){
            if ($get["route"] === "a-propos"){
                $pageController = new PageController();
                $pageController->about();
            }

            else if ($get["route"] === "contact"){
                $pageController = new PageController();
                $pageController->contact();
            }

            else{
                $pageController = new PageController();
                $pageController->notFound();
            }
        }

        else{
            $pageController = new PageController();
            $pageController->home();
        }
    }
}