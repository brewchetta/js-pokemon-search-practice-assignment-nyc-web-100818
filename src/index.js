document.addEventListener('DOMContentLoaded', () => {
  const pokemonContainer = document.getElementById('pokemon-container')

  // Builds the pokemon
  POKEMON.forEach((poke) => {
    const pokeBox = document.createElement('div')
    pokeBox.innerHTML = `<p>${poke['name']}</p> <br> <img src='${poke["sprites"]["front"]}'>`
    pokeBox.classList.add(`pokemon-container`)
    pokemonContainer.appendChild(pokeBox)

    // Adds click event
    pokeBox.addEventListener('click', () => {
      if (pokeBox.classList.contains('back')) {
        pokeBox.querySelector('img').src = poke['sprites']['front']
        pokeBox.classList.remove('back')
      } else {
        pokeBox.querySelector('img').src = poke['sprites']['back']
        pokeBox.classList.add('back')
      }
    })
  })

  const pokemonSearchInput = document.getElementById('pokemon-search-input')
  pokemonSearchInput.addEventListener('input', (e) => {
    e.preventDefault()
    const pokemonContainer = document.getElementById('pokemon-container')
    let pokeArray = Array.from(pokemonContainer.getElementsByClassName('pokemon-container'))

    pokeArray.forEach((poke) => {
      const name = poke.querySelector('p').innerText
      if (!name.toLowerCase().includes(pokemonSearchInput.value.toLowerCase())) {
        poke.classList.add('hide')
      } else {
        poke.classList.remove('hide')
      }
    })
  })
})
