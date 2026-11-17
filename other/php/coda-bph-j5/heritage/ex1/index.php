<?php
require "Reader.php";

$lecteur = new Reader("soup", "soup");
$lecteur->addBookToFavorites("wawa");
$lecteur->addBookToFavorites("wewa");
$lecteur->showFavouriteBookList();
$lecteur->removeBookFromFavorites("wawa");
$lecteur->showFavouriteBookList();
var_dump($lecteur->login());
?>