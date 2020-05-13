import { IPokemon, IPokemonSpecies } from "pokeapi-typescript";


export type PokemonData = IPokemon & {
  species_data: {
    flavor_text_entries: IPokemonSpecies['flavor_text_entries'],
    evolves_from_species: IPokemonSpecies['evolves_from_species']
  }
};


