<?php
class Admin extends AbstractUser{
    public function __construct(string $username, string $password){
        $this->setUsername($username);
        $this->setPassword($password);
        $this->setRole("ADMIN");
    }

    public function changeUserRole(Member $user): void {
        if ($user->getRole() === "MEMBER") {
            $user->setRole("PREMIUM_MEMBER");
        } else {
            $user->setRole("MEMBER");
        }
    }
}
?>