const sectionCards = document.getElementById('platformCards');

export function getPlatformList(response) {
    for (let i = 0; i < response.results.length; i++) {

        // creação cartão
        const platformCard = document.createElement("div");
        platformCard.classList.add("platformCard");
        sectionCards.append(platformCard);

        //Exibir Descrição
        const platformName = document.createElement("h2");
        platformName.classList.add("platformName");
        platformCard.append(platformName);
        platformName.textContent = response.results[i].name;
    }
}