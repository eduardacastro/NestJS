export const pokemonIds = [1,20,30,34,68];

console.log(pokemonIds);

export const pokemon: Pokemon = {
    id: 1,
    name: 'Bulbasaur',
    data: undefined
}

interface Pokemon {
    id: number;
    name: string;
    age?: number;
    data: number | undefined;
}

export const charmander: Pokemon = {
    id: 0,
    name: "",
    data: undefined
}

export const pokemons: Pokemon[] = [];

