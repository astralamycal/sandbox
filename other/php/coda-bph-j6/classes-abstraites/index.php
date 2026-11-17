<?php
require "AbstractUser.php";
require "Admin.php";
require "Member.php";
$me = new Member("I love coding", "john_doe", "securepassword", "MEMBER");
$admin = new Admin("admin_user", "adminpassword");
echo "Member Username: " . $me->getUsername() . "<br>";
echo "Member Role: " . $me->getRole() . "<br>";
echo "Member Biography: " . $me->getBiography() . "<br>";
echo "Admin Username: " . $admin->getUsername() . "<br>";
echo "Admin Role: " . $admin->getRole() . "<br>";
$admin->changeUserRole($me);
echo "Member New Role: " . $me->getRole() . "<br>";
$admin->changeUserRole($me);
echo "Member New Role: " . $me->getRole() . "<br>";
?>