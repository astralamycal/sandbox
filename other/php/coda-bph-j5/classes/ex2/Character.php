<?php
class Character{
    private string $firstName = "Jane";
    private string $lastName = "Doe";

    public function __construct(private int $id){
    }

    public function getId(): int{
        return $this->id;
    }

    public function getFirstName(): string{
        return $this->firstName;
    }

    public function getLastName(){
        return $this->lastName;
    }

    public function getFullName(): string{
        return $this->firstName . " " . $this->lastName;
    }

    public function setFirstName(string $firstName): void{
        $this->firstName = $firstName;
    }

    public function setLastName(string $lastName): void{
        $this->lastName = $lastName;
    }
}
?>