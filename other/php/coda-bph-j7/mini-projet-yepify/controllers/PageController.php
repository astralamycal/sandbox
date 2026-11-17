<?php
class PageController
{
    public function home()
    {
        require "templates/home.phtml";
    }

    public function pricing()
    {
        require "templates/tarifs.phtml";
    }
}