<?php
class Warrior extends Character{
    public function __construct(int $life, string $name, private int $energy){
        $this->setLife($life);
        $this->setName($name);
    }

    public function getEnergy(){
        return $this->energy;
    }

    public function setEnergy(int $energy): void{
        $this->energy = $energy;
    }
}
?>