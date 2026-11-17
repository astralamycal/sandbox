<?php

class UserController extends AbstractController
{
    public function profile() :void
    {
        if (isset($_SESSION["id"])){
            $this->render('member/profile.html.twig', []);
        }

        else{
            $this->render("auth/login.html.twig");
        }
    }

    public function create() :void
    {
        if ($_SESSION['role'] === 'ADMIN'){
            if (isset($_POST["firstName"], $_POST["lastName"], $_POST["email"], $_POST["password"], $_POST["confirmPassword"], $_POST["role"])){
                $userManager = new UserManager();
                if ($userManager->findByEmail($_POST["email"]) === null){
                    if ($_POST["password"] === $_POST["confirmPassword"]){
                        $userManager->create(new User($_POST["firstName"], $_POST["lastName"], $_POST["email"], password_hash($_POST["confirmPassword"], PASSWORD_DEFAULT)));
                        $this->list();
                    }

                    else{
                        echo "Password and password confirmation do not match.";
                        $this->render('admin/users/create.html.twig', []);
                    }
                }

                else{
                    echo "Email already exists.";
                    $this->render('admin/users/create.html.twig', []);
                }
            }

            else{
                $this->render('admin/users/create.html.twig', []);
            }
        }
    }

    public function update() : void
    {
        if ($_SESSION['role'] === 'ADMIN'){
            $userManager = new UserManager();
            $user = $userManager->findById($_GET["id"]);
            if (isset($_POST["firstName"], $_POST["lastName"], $_POST["email"], $_POST["password"], $_POST["role"])){
                $userManager->update(new User($_POST["firstName"], $_POST["lastName"], $_POST["email"], password_hash($_POST["password"], PASSWORD_DEFAULT), $_POST["role"], $user->getId()));
                $this->list();
            }

            else{
                $this->render('admin/users/update.html.twig', ['id' => $user->getId(), 'firstname' => $user->getFirstName(), 'lastname' => $user->getlastName(), 'email' => $user->getEmail(), 'role' => $user->getRole()]);
            }
        }
    }

    public function delete() : void
    {
        if ($_SESSION['role'] === 'ADMIN'){
            $userManager = new UserManager();
            $user = $userManager->findById($_GET["id"]);
            $userManager->delete($user);
            $this->redirect("index.php?route=list");
        }
    }

    public function list() : void
    {
        if ($_SESSION['role'] === 'ADMIN'){
            $userManager = new UserManager();
            $users = $userManager->findAll();
            $data = [];
            foreach ($users as $user)
            {
                $data[] = ['id' => $user->getId(),
                'firstName' => $user->getFirstName(),
                'lastName' => $user->getlastName(),
                'email' => $user->getEmail()];
            }
            $this->render('admin/users/index.html.twig', [ "data" => $data]);
        }
    }

    public function show() : void
    {
        if ($_SESSION['role'] === 'ADMIN'){
            $userManager = new UserManager();
            $user = $userManager->findById($_GET["id"]);
            $this->render('admin/users/show.html.twig', ['id' => $user->getId(), 'firstname' => $user->getFirstName(), 'lastname' => $user->getlastName(), 'email' => $user->getEmail(), 'role' => $user->getRole()]);
        }
    }
}
