async function fetchHeroes() {
    try {
        const response = await fetch("http://localhost:3000/heroes");

        if (!response.ok) {
            throw new Error(`tu sais pas coder: ${response.status}`);
        }

        const heroes = await response.json();
        const heroesList = [];

        for (const hero of heroes) {
            heroesList.push(hero);
        }

        return heroesList;

    } catch (error) {
        console.error(error);
    }
}

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