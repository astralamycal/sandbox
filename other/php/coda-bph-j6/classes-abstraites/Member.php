<?php
class Member extends AbstractUser{
    private $favourite = [];

    public function __construct(private string $biography, string $username, string $password, string $role = "MEMBER"){
        $this->setUsername($username);
        $this->setPassword($password);
        $this->setRole($role);
    }

    public function getBiography(): string {
        return $this->biography;
    }

    public function setBiography(string $biography): void {
        $this->biography = $biography;
    }

    public function getFavourite(): array {
        return $this->favourite;
    }

    public function addFavourite(string $item): void {
        $this->favourite[] = $item;
    }

    public function removeFavourite(string $item): void {
        $index = array_search($item, $this->favourite);
        if ($index !== false) {
            unset($this->favourite[$index]);
            $this->favourite = array_values($this->favourite);
        }
    }   
}
?>