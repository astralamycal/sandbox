const bouton = document.createElement("p");
const pointsHolder = document.createElement("p");
let points = 0;

bouton.innerText = String.fromCharCode(97 + Math.floor(Math.random() * 26));

document.body.style.fontSize = "100px";
document.body.style.textAlign = "center";

document.addEventListener("keydown", (event) => {
    if (event.key === bouton.innerText) {
        points++;
    } else {
        points--;
    }

    bouton.innerText = String.fromCharCode(97 + Math.floor(Math.random() * 26));
    pointsHolder.innerText = points;
});

document.body.appendChild(bouton);
document.body.appendChild(pointsHolder);