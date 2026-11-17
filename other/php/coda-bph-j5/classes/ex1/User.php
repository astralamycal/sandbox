<?php
class User{
    public function __construct(private int $id, private string $username, private string $password)
    {
    }

    public function getId(): int{
        return $this->id;
    }

    public function getUsername(): string{
        return $this->username;
    }

    public function getPassword(){
        return $this->password;
    }

    public function setUsername(string $username): void{
        $this->username = $username;
    }

    public function setPassword($password): void{
        $this->password = $password;
    }
}
?>