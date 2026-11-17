<?php
require "Character.php";

$perso = new Character("Ragnar");
$perso->setWeapon("Sword", 10);
echo $perso->getName();
echo $perso->getWeapon();
echo $perso->fight();
?>