const bouton = document.createElement("button");
bouton.innerText = "bruh";
document.body.appendChild(bouton);

bouton.addEventListener("mouseover", (event) => {
    const x = Math.random() * innerWidth;
    const y = Math.random() * innerHeight;

    bouton.style.left = x + "px";
    bouton.style.top = y + "px";
});

bouton.style.position = "fixed";
bouton.style.transition = "left 0.3s, top 0.3s";

console.log(bouton);