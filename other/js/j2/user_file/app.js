const users = [
    { "firstname": "Sophie", "name": "Bernard", "age": 28, "email": "sophie.bernard@email.com", "city": "Marseille", "job": "developer" },
    { "firstname": "Sophie", "name": "Bernard", "age": 28, "email": "sophie.bernard@email.com", "city": "Marseille", "job": "developer" },
    { "firstname": "Sophie", "name": "Bernard", "age": 28, "email": "sophie.bernard@email.com", "city": "Marseille", "job": "developer" }
];

for (user of users) {
    console.log("=== Fiche Utilisateur ===");
    for (element in user) {
        console.log(`${element} : ${user[element]}`);
    }
}