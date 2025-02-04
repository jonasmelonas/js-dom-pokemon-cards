
const pokemonData = data;
const cardList = document.querySelector("#cards")

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

        const appearanceTitle = document.createElement("h2")
        appearanceTitle.textContent = "Game appearances:"

        const appearanceList = document.createElement("ul")

        pokemon.game_indices.forEach(appearance => {
            const appearanceItem = document.createElement("li")
            appearanceItem.textContent = `${appearance.version.name}`
            appearanceList.appendChild(appearanceItem)
        })

        const gameAppeared = document.createElement("h3")
        gameAppeared.textContent = `First game appearance: ${pokemon.game_indices[0].version.name}`

        item.appendChild(title)
        item.appendChild(img)
        item.appendChild(statsList)
        item.appendChild(appearanceTitle)
        item.appendChild(appearanceList)
        
        return item
    })
}

function main() {
    generateCards().forEach(card => {
        cardList.appendChild(card)
    })
}

main()