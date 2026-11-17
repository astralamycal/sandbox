<?php
class Mage extends Character{
    public function __construct(int $life, string $name, private int $mana){
        $this->setLife($life);
        $this->setName($name);
    }

    public function getMana(){
        return $this->mana;
    }

    public function setMana(int $mana): void{
        $this->mana = $mana;
    }
}
?>