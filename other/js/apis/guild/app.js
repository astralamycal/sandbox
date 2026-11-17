import { Item } from "./item.js";

async function fetchHeroes() {
    try {
        const response = await fetch("http://localhost:3000/heroes");

        if (!response.ok) {
            throw new Error(`tu sais pas coder: ${response.status}`);
        }

        const heroes = await response.json();
        const heroesList = [];

        for (const hero of heroes) {
            heroesList.push(new Character(hero["id"], hero["name"], hero["class"], hero["level"], hero["hp"], hero["attack"], hero["defense"], hero["gold"]));
        }

        return heroesList;

    } catch (error) {
        console.error(error);
    }
}

fetchHeroes();

async function renderHeroesTable() {
    const heroes = await fetchHeroes();
    const tableHeroes = document.createElement("table");
    const headerTexts = [];

    for (let hero in heroes[0]) {
        headerTexts.push(hero);
    }

    for (const headerText of headerTexts) {
        const thElement = document.createElement("th");
        thElement.textContent = headerText;
        tableHeroes.appendChild(thElement);
    }

    for (const hero of heroes) {
        const trElement = document.createElement("tr");
        for (const headerText of headerTexts) {
            const tdElement = document.createElement("td");
            tdElement.textContent = hero[headerText];
            trElement.appendChild(tdElement);
        }
        tableHeroes.appendChild(trElement);
    }

    document.body.appendChild(tableHeroes);

}

renderHeroesTable();

class Character {
    #id;
    #name;
    #type;
    #level;
    #hp;
    #attack;
    #defense;
    #gold;
    #inventory

    constructor(id, name, type, level, hp, attack, defense, gold) {
        this.#id = id;
        this.#name = name;
        this.#type = type;
        this.#level = level;
        this.#hp = hp;
        this.#attack = attack;
        this.#defense = defense;
        this.#gold = gold;
        this.#inventory = [];
    }

    set id(id) {
        if (typeof id === "number") {
            this.#id = id;
        } else {
            throw new Error("met un id valide smh");
        }
    }

    set name(name) {
        if (name !== "") {
            this.#name = name;
        } else {
            throw new Error("Je te demande un caractère au moins bouge ta flemme -_-");
        }
    }

    set type(type) {
        if (type !== "") {
            this.#type = type;
        } else {
            throw new Error("Je te demande un caractère au moins bouge ta flemme -_-");
        }
    }

    set level(level) {
        if (level >= 0) {
            this.#level = level;
        } else {
            throw new Error("bro...");
        }
    }

    set hp(hp) {
        if (hp >= 0) {
            this.#hp = hp;
        } else {
            throw new Error("bro...");
        }
    }

    set attack(attack) {
        if (attack >= 0) {
            this.#attack = attack;
        } else {
            throw new Error("bro...");
        }
    }

    set defense(defense) {
        if (defense >= 0) {
            this.#defense = defense;
        } else {
            throw new Error("bro...");
        }
    }

    set gold(gold) {
        if (gold >= 0) {
            this.#gold = gold;
        } else {
            throw new Error("bro...");
        }
    }

    get id() {
        return this.#id;
    }

    get name() {
        return this.#name;
    }

    get type() {
        return this.#type;
    }

    get level() {
        return this.#level;
    }

    get hp() {
        return this.#hp;
    }

    get attack() {
        return this.#attack;
    }

    get defense() {
        return this.#defense;
    }

    get gold() {
        return this.#gold;
    }

    attack() {
        console.log(`${this.name} attacks for ${this.attack} damages.`);
    }

    addItem(item) {
        this.#inventory.push(item);
    }

    removeItem(item) {
        this.#inventory = this.#inventory.filter((ele) => ele !== item);
    }

    displayInventory() {
        for (item of this.#inventory) {
            item.displayInfos();
        }
    }
}