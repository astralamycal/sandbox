<?php
require "User.php";
require "connexion.php";

$superman = [
	"first_name" => "Clark",
	"last_name" => "Kent",
	"email" => "clark.kent@test.fr"
];

$user = new User($superman["first_name"], $superman["last_name"], $superman["email"]);

$query = $db->prepare("SELECT * FROM users;");
$query->execute();
$output = $query->fetch(PDO::FETCH_ASSOC);
$user2 = new User($output["first_name"], $output["last_name"], $output["email"]);

$query = $db->prepare("SELECT * FROM users;");
$query->execute();
$output = $query->fetchAll(PDO::FETCH_ASSOC);
$userBoard = [];
foreach ($output as $users){
    $userBoard[] = new User($users["first_name"], $users["last_name"], $users["email"]);
}

$query = $db->prepare("INSERT INTO users(first_name, last_name, email) VALUES(:first_name, :last_name, :email);");
$parameters = [
    ":first_name" => $user->getFirstName(),
    ":last_name" => $user->getLastName(),
    ":email" => $user->getEmail()
];
$query->execute($parameters);
?>