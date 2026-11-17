<?php
class Router{
    public function handleRequest(): void{
        $authController = new AuthController();
        if (!isset($get["path"])){
            $authController->login($_POST);
        }

        else{
            $authController->notFound();
        }
    }
}