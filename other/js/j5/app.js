function attack(player) {
    const damages = Math.floor(Math.random() * 10)
    player.hp -= damages;
    console.log(`They deal ${damages} damages.`)
}

function game() {
    let player1 = { name: "wawa", hp: 10 };
    let player2 = { name: "wewa", hp: 10 };

    return new Promise((player1, player2) => {
        const intervalId = setInterval(() => {
            console.log("Player 2 attacks.");
            attack(player1);
            console.log("Player 1 attacks.");
            attack(player2);

            if (player1.hp <= 0 && player2.hp <= 0) {
                clearInterval(intervalId);
                reject("Tie");
            } else if (player1.hp <= 0) {
                clearInterval(intervalId);
                reject("The player loses.");
            } else {
                clearInterval(intervalId);
                resolve("the player wins.");
            }
        }, 300);
    });
}

game().then((result) => console.log(result))
    .catch((error) => console.log(error))
    .finally(() => console.log("Game over"));