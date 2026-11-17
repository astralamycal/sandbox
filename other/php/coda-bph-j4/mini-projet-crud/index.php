<?php

if(isset($_GET["route"]))
{
    if ($_GET["route"] === "delete"){
        header("Location: controllers/delete-user.php?user=" . $_GET["user"]);
    }

    else{
        $route = $_GET["route"];
    }
}
else
{
    $route = "list";
}

require "templates/layout.phtml";

?>
