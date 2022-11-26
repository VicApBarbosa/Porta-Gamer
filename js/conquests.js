const sectionCards = document.getElementById('achievementsCards');

export function getConquestsList(response) {
    for (let i = 0; i < response.results.length; i++) {

        // Criação de cartão
        const achievementsCard = document.createElement("div");
        achievementsCard.classList.add("achievementsCards");
        sectionCards.append(achievementsCard);

        // Nome em Exibição
        const achievementsName = document.createElement("h2");
        achievementsName.classList.add("achievementsName");
        achievementsCard.append(achievementsName);
        achievementsName.textContent = response.results[i].name;
        // ADivisor de exibição

        const divider = document.createElement("div");
        divider.classList.add("divDivider");
        achievementsCard.append(divider);

        //Exibir Descrição
        const achievementsDescription = document.createElement("p");
        achievementsDescription.classList.add("achievementsDescription");
        achievementsCard.append(achievementsDescription);
        achievementsDescription.textContent = response.results[i].description;
    }
}