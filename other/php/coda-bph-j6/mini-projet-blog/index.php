<?php
require "models/Users.php";
require "models/Posts.php";
require "models/Categories.php";
require "managers/AbstractManager.php";
require "managers/UserManager.php";

$test1 = new User("john_doe", "wawawewa", "securepassword", new DateTime(), "oui");
$test2 = new Post("My First Post", "This is an excerpt.", "This is the full content of the post.", $test1, new DateTime());
$test3 = new Category("Tech", "All about technology.");
$wee = new UserManager();

$temp = $wee->create($test1);
$test1->setUsername("deez");
$test1->setId($temp);
$wee->update($test1);
$wee->delete($test1->getId());
?>