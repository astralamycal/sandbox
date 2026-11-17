<?php
class UserManager{
    private array $users = [];
    private PDO $db;

    public function __construct(){    
        $host = "localhost";
        $port = "3306";
        $dbname = "coda_bph_j6_blog";
        $connexionString = "mysql:host=$host;port=$port;dbname=$dbname;charset=utf8";
        
        $user = "root";
        $password = "";
        
        $this->db = new PDO(
            $connexionString,
            $user,
            $password
        );
    }

    public function getUsers(): array {
        return $this->users;
    }

    public function setUsers(array $users): void {
        $this->users = $users;
    }

    public function loadUsers(): void{
        $query = $this->db->prepare("SELECT * FROM users");
        $query->execute();
        $results = $query->fetchAll(PDO::FETCH_ASSOC);

        foreach($results as $result){
            $user = new User();
            $user->setId($result['id']);
            $user->setUsername($result['username']);
            $user->setEmail($result['email']);
            // Ajoutez d'autres propriétés si nécessaire

            $this->users[] = $user;
        }
    }
    private string $username, private string $email, private string $password, private string $role = "USER"

    public function saveUser(User $user): void{

    }

    public function deleteUser(User $user): void{

    }
}
?>