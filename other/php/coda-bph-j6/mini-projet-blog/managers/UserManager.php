<?php
class UserManager extends AbstractManager{
    public function __construct(){
        parent::__construct();
    }

    public function findAll() : array{
        $query = $this->db->prepare("SELECT * FROM users;");
        $query->execute();
        $users = $query->fetchAll(PDO::FETCH_ASSOC);

        $result = [];
        foreach ($users as $user){
            $temp = new User($user["username"], $user["email"], $user["password"], DateTime::createFromFormat("Y-m-d H:m:s", $user["created_at"]), $user["role"],);
            $temp->setId($user["id"]);
            $result[] = $temp;
        }
        return $result;
    }

    public function findOne(int $id) : ? User{
        $query = $this->db->prepare("SELECT * FROM users WHERE id = :id;");
        $parameters = [
            "id" => $id
        ];
        $query->execute($parameters);
        $user = $query->fetch(PDO::FETCH_ASSOC);

        if ($user !== false){
            $temp = new User($user["username"], $user["email"], $user["password"], DateTime::createFromFormat("Y-m-d H:m:s", $user["created_at"]), $user["role"],);
            $temp->setId($user["id"]);
            $result[] = $temp;
            return $result;
        }
        return null;
    }

    public function create(User $user): int{
        $query = $this->db->prepare("INSERT INTO users(username, password, email, role, created_at) VALUES(:username, :password, :email, :role, :created_at);");
        $parameters = [
            "username" => $user->getUsername(),
            "password" => $user->getPassword(),
            "email" => $user->getEmail(),
            "role" => $user->getRole(),
            "created_at"=> $user->getCreatedAt()->format('Y-m-d H:i:s')
        ];
        $query->execute($parameters);
        return $this->db->lastInsertId();
    }

    public function update(User $user): void{
        $query = $this->db->prepare("UPDATE users SET username = :username, password = :password, email = :email, role = :role, created_at = :created_at WHERE id = :id;");
        $parameters = [
            "username" => $user->getUsername(),
            "password" => $user->getPassword(),
            "email" => $user->getEmail(),
            "role" => $user->getRole(),
            "created_at"=> $user->getCreatedAt()->format('Y-m-d H:i:s'),
            "id" => $user->getId()
        ];
        $query->execute($parameters);
    }

    public function delete(int $id): void{
        $query = $this->db->prepare("DELETE FROM users WHERE id = :id;");
        $parameters = [
            "id" => $id,
        ];
        $query->execute($parameters);
    }
}