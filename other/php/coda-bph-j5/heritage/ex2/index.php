<?php
require "Character.php";
require "Warrior.php";
require "Mage.php";

$ch = new Character();
$wa = new Warrior(12, "wawa", 3);
$ma = new Mage(12, "wewa", 4);

$ch->introduce();
$wa->introduce();
$ma->introduce();

$wa->introduce();
echo $wa->getLife() . "<br>";
echo $wa->getName() . "<br>";
echo $wa->getEnergy() . "<br>";

$ma->introduce();
echo $ma->getLife() . "<br>";
echo $ma->getName() . "<br>";
echo $ma->getMana() . "<br>";
?>