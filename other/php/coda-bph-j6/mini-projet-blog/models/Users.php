<?php

class User
{
    private ? int $id = null;

    public function __construct(private string $username, private string $email, private string $password, private Datetime $created_at,private ?string $role = null) {}
    
    public function getId(): ? int
    {
        return $this->id;
    }

    public function getUsername(): string
    {
        return $this->username;
    }

    public function getEmail(): string
    {
        return $this->email;
    }

    public function getPassword(): string
    {
        return $this->password;
    }

    public function getRole(): ?string
    {
        return $this->role;
    }

    public function getCreatedAt(): DateTime
    {
        return $this->created_at;
    }

    public function setId(int $id): void
    {
        $this->id = $id;
    }

    public function setUsername(string $username): void
    {
        $this->username = $username;
    }

    public function setEmail(string $email): void
    {
        $this->email = $email;
    }

    public function setPassword(string $password): void
    {
        $this->password = $password;
    }

    public function setRole(string $role): void
    {
        $this->role = $role;
    }

    public function setCreatedAt(DateTime $created_at): void
    {
        $this->created_at = $created_at;
    }

}   

?>