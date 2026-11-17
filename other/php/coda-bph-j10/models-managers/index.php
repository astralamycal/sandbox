<?php

require "config/autoload.php";

$router = new Router();
$router->handleRequest();
$test = new UserManager();
$user1 = new User("John", "Doe", "john.doe@example.com", "password123", new DateTime(), 8);
$test->create($user1);
var_dump($test->findAll());
var_dump($test->findOne(1));
$test->update(new User("Jane", "Doe", "jane.doe@example.com", "newpassword123", new DateTime(), 1));
var_dump($test->findAll());
var_dump($test->findOne(1));
$test->delete($user1);
var_dump($test->findAll());