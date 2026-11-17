<?php
class UserController extends AbstractController{
    public function show(){
        $this->render("_show.phtml", []);
    }

    public function create(){
        $this->render("_create.phtml", []);
    }

    public function checkCreate(){
        $this->render("_show.phtml", []);
    }

    public function update(){
        $this->render("_update.phtml", []);
    }

    public function checkUpdate(){
        $this->render("_show.phtml", []);
    }

    public function delete(){
        $this->render("_delete", []);
    }

    public function list(){
        $this->render("_show.phtml", []);
    }
}