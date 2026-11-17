<?php
class Character{
    protected int $life = 0;
    protected string $name = "Placeholder";

    public function __construct(){
    }

    public function getLife(): string{
        return $this->life;
    }

    public function getName(){
        return $this->name;
    }

    public function setLife(int $life): void{
        $this->life = $life;
    }

    public function setName(string $name): void{
        $this->name = $name;
    }

    public function introduce(): void{
        echo "Bonjour je m'appelle " .$this->name . ".<br>";
    }
}
?>