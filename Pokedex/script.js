let container = document.getElementById('container')
let search = document.getElementById('search')
let form = document.getElementById('form')
 let url = 'https://pokeapi.co/api/v2/pokemon'

 let pokemon_num = 151;
let pokemons = []


 const fetchPokemons = async () =>{
        for (let i = 0; i < pokemon_num; i++) {
           await getAllPokemon(i)
        }
        pokemons.forEach((pokemn) => createPokemonCArd(pokemn))
    }

 const removePokemons = async () =>{
        let pokemonsEls = document.getElementsByClassName("pokemon") 

        let removablePokemons = [];
        for (let i = 0; i < pokemonsEls.length; i++) {
            const pokemonEl = pokemonsEls[i]
            removablePokemons = [...removablePokemons, pokemonEl]
         }

         removablePokemons.forEach((remoke) => remoke.remove())
}

const getPokemon = async (id) =>{
    const searPokemon = pokemons.filter((poke) => poke.name === id)
    removePokemons()
    searPokemon.forEach((pokem) => createPokemonCArd(pokem))
}

const getAllPokemon = (id)=>{
    const rest = await fetch(`${url}/${id}`)

    const pokemon = rest.json()

    pokemons = [...pokemons, pokemon]
}

fetchPokemons()


function createPokemonCArd(pokemon){
    
}