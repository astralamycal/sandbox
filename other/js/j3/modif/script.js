function getBox() {
    return document.getElementById('demo-box');
}

function toggleRounded() {
    const box = getBox();
    box.classList.toggle("rounded");
}

function toggleShadow() {
    const box = getBox();
    box.classList.toggle("shadow");
}

function toggleBorder() {
    const box = getBox();
    box.classList.toggle("bordered");
}

function toggleGradient() {
    const box = getBox();
    box.classList.toggle("gradient");
}

function toggleAnimation() {
    const box = getBox();
    box.classList.toggle("animated");
}

function resetBox() {
    const box = getBox();
    box.classList.remove("rounded", "shadow", "bordered", "gradient", "animated");
}

function changeColor(colour) {
    const box = getBox();
    box.style.backgroundColor = colour;
}

function changeSize(size) {
    const box = getBox();
    const sizes = { "small": "100px", "medium": "300px", "large": "500px" };
    box.style.width = sizes[size];
    box.style.height = sizes[size];
}

function toggleTheme() {
    document.body.classList.toggle("dark-theme");
}

function highlightCards(blep) {
    const wawa = document.querySelectorAll(".card");

    wawa.forEach((card) => {
        card.classList.remove("highlight", "success", "danger");
        card.classList.add(blep);
    })
}