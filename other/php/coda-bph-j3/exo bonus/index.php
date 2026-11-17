<?php

function routing() : string{
    if (isset($_GET["route"])){
        if ($_GET["route"] === "about"){
            return "about";
        }

        else if ($_GET["route"] === "contact"){
            return "contact";
        }
    }
    return "homepage";
}
$template = routing();
require "templates/layout.phtml";

?>