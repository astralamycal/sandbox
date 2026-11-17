<?php
require "weapon.php";

class Character{
    private $weapon;

    public function __construct(private string $name){
        $weapon = new Weapon("", 0);
    }

    public function getWeapon(): string{
        return $this->weapon->getName() . " " . $this->weapon->getDamages();
    }

    public function getName(): string{
        return $this->name;
    }

    public function setWeapon(string $name, int $damages): void{
        $this->weapon = new Weapon($name, 10);
    }

    public function setName(string $name): void{
        $this->name = $name;
    }

    public function fight(): string{
        return $this->weapon->strike();
    }
}
?>