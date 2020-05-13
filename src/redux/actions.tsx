import {
  ClearPokemonDrawerAC,
  GetPokemonAC,
  PokemonData,
  RemovePokemonFromDrawerAC,
  SetSelectedPokemon,
  UpdateDrawerPokelistAC,
  UpdateSelectedPokemonAC
} from '../definitions';


export const getPokemon = (() => ({type: 'GET_POKEMON'})) as GetPokemonAC

export const setSelectedPokemon = (selectedPokemon: PokemonData | null) => ({ type: 'SET_SELECTED_POKEMON', payload: selectedPokemon}) as SetSelectedPokemon

export const updateSelectedPokemon = ((selectedPokemon: PokemonData | null) => ({
  type: 'UPDATE_SELECTED_POKEMON',
  payload: selectedPokemon
})) as UpdateSelectedPokemonAC

export const updateDrawerPokelist = ((pokemon: PokemonData) => ({type: 'UPDATE_DRAWER_POKELIST', payload: pokemon})
) as UpdateDrawerPokelistAC

export const removePokemonFromDrawer = ((pokemon: PokemonData) =>
  ({type: 'REMOVE_POKEMON_FROM_DRAWER', payload: pokemon})) as RemovePokemonFromDrawerAC

export const clearPokemonDrawer = ((selectedPokemon: PokemonData[]) => ({type: 'CLEAR_POKEMON_DRAWER'})) as ClearPokemonDrawerAC

export const openCompareDialog = (shouldOpen: boolean) => ({
  type: "OPEN_COMPARE_POKEMON_DIALOG",
  payload: shouldOpen
}) as any


