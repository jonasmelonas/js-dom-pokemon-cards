
const pokemonData = data;
const cardList = document.getElementsByClassName("cards")

function generateCards() {
    cardList.innerHTML = ""

    return pokemonData.map(pokemon => {
        const item = document.createElement("li")
        item.classList.add("card")

        const title = document.createElement('h2')
        title.classList.add('card--title')
        title.textContent = pokemon.name

        const img = document.createElement('img')
        img.width = 256;
        img.classList.add('card--img')
        img.src = pokemon.sprites.other["official-artwork"].front_default

        const statsList = document.createElement('ul')
        statsList.classList.add('card--text')

        pokemon.stats.forEach(stat => {
            const statitem = document.createElement('li')
            statitem.textContent = `${stat.stat.name}: ${stat.base_stat}`
            statsList.appendChild(statitem)
        })

        item.appendChild(title)
        item.appendChild(img)
        item.appendChild(statsList)
        
        return item
    })
}

function main() {
    generateCards().forEach(card => {
        cardList[0].appendChild(card)
    })
}

main()