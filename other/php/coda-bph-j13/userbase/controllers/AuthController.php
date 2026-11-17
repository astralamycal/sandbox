<?php

class AuthController extends AbstractController
{
    public function home() : void
    {
        $this->render('home/home.html.twig', []);
    }

    public function login() : void
    {
        if (isset($_POST["email"], $_POST["password"])){
            $userManager = new UserManager();
            $tempUser = $userManager->findByEmail($_POST["email"]);
            if ($tempUser !== null){
                if (password_verify($_POST["password"], $tempUser->getPassword())){
                    $_SESSION["id"] = $tempUser->getId();
                    $_SESSION["role"] = $tempUser->getRole();
                    $this->render("member/profile.html.twig", []);
                }

                else{
                    echo "Wrong password.";
                    $this->render('auth/login.html.twig', []);
                }
            }

            else{
                echo "Email does not exist in database.";
                $this->render('auth/login.html.twig', []);
            }
        }

        else{
            $this->render('auth/login.html.twig', []);
        }
    }

    public function logout() : void
    {
        session_destroy();
        $this->redirect('index.php');
    }

    public function register() : void
    {
        if (isset($_POST["firstName"], $_POST["lastName"], $_POST["email"], $_POST["password"], $_POST["confirmPassword"])){
            $userManager = new UserManager();
            if ($userManager->findByEmail($_POST["email"]) === null){
                if ($_POST["password"] === $_POST["confirmPassword"]){
                    $userManager->create(new User($_POST["firstName"], $_POST["lastName"], $_POST["email"], password_hash($_POST["confirmPassword"], PASSWORD_DEFAULT)));
                    $this->render('auth/login.html.twig', []);
                }

                else{
                    echo "Password and password confirmation do not match.";
                    $this->render('auth/register.html.twig', []);
                }
            }

            else{
                echo "Email already exists.";
                $this->render('auth/register.html.twig', []);
            }
        }

        else{
            $this->render('auth/register.html.twig', []);
        }
    }

    public function notFound() : void
    {
        $this->render('error/notFound.html.twig', []);
    }
}