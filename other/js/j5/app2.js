function setButtons() {
    const ressourceNames = { "iron": null, "wood": null, "sticks": {}, "wood planks": null, "iron ingot": null, "sword": null, "pickaxe": null };

    let buttonId = 1;

    for (let ele in ressourceNames) {
        let button = document.createElement("button");
        button.id = buttonId;
        buttonId++;
        button.amount = 0;
        button.addEventListener("click", craft(button));

        if (ele === "iron" || ele === "wood") {
            button.innerText = "get " + ele;
        } else {
            button.innerText = "craft " + ele;
        }

        document.body.appendChild(button);
        ressourceNames[ele] = button;
    }

    return ressourceNames;
}

function craft(button) {
    if (button < 3) {
        button.amount++;
    } else {

    }
    console.log(button.amount);
}

const buttons = setButtons();