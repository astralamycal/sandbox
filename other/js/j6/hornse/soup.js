const inventory = [];

function findInInventory(itemName) {
    return inventory.find((item) => item.name === itemName); // vérifie si dans inventaire
}

function findInInventoryOrCreate(itemName, baseQuantity = 0) {
    let existingItem = findInInventory(itemName);

    if (!existingItem) {
        existingItem = { name: itemName, quantity: baseQuantity };
        inventory.push(existingItem);
    }

    return existingItem;
} // pareil mais create l'obj si besoin

const items = [
    {
        name: "Bois",
        duration: 0,
        action: () => {
            const item = findInInventoryOrCreate("Bois");
            item.quantity++;
        },
    },
    {
        name: "Fer",
        duration: 0,
        action: () => {
            const item = findInInventoryOrCreate("Fer");
            item.quantity++;
        },
    },
];

function updateDisplay() {
    for (const item of items) {
        const buttonElement = document.querySelector(
            `button[data-name='${item.name}']`
        );
        if (!buttonElement) {
            console.log(`button[data-name='${item.name}']`);
            console.error(`Element ${item.name} not found in DOM`);
            return;
        }

        const inventoryItem = findInInventory(item.name);
        const quantity = inventoryItem?.quantity || 0;

        buttonElement.textContent = `${item.name} (${quantity})`;
    }
}

for (const item of items) {
    const buttonElement = document.createElement("button");
    buttonElement.dataset.name = item.name;

    buttonElement.addEventListener("click", () => {
        item.action();
        updateDisplay();
    });

    document.body.appendChild(buttonElement);

    setTimeout(() => {
        updateDisplay();
    }, 0);
}

function craft(item) {
    return;
}

const craftItems = [
    {
        name: "stick",
        duration: 0,
        craft: { "wood": 2 },
        action: () => {
            const item = findInInventoryOrCreate("stick");
            craft(item);
        },
    },
    {
        name: "wood plank",
        duration: 0,
        craft: { "wood": 1 },
        action: () => {
            const item = findInInventoryOrCreate("wood plank");
            craft(item);
        },
    },
];