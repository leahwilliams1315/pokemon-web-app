import {
  ClearPokemonDrawerAC,
  GetPokemonAC,
  RemovePokemonFromDrawerAC, SetSelectedPokemon,
  UpdateDrawerPokelistAC,
  UpdateSelectedPokemonAC
} from '../definitions';
import { CombinedPokemonType, PokemonListItem } from "../definitions";


export const getPokemon = (() => ({type: 'GET_POKEMON'})) as GetPokemonAC

export const setSelectedPokemon = (selectedPokemon: CombinedPokemonType | null) => ({ type: 'SET_SELECTED_POKEMON', payload: selectedPokemon}) as SetSelectedPokemon

export const updateSelectedPokemon = ((selectedPokemon: CombinedPokemonType | null) => ({
  type: 'UPDATE_SELECTED_POKEMON',
  payload: selectedPokemon
})) as UpdateSelectedPokemonAC

export const updateDrawerPokelist = ((pokemon: CombinedPokemonType) => ({type: 'UPDATE_DRAWER_POKELIST', payload: pokemon})
) as UpdateDrawerPokelistAC

export const removePokemonFromDrawer = ((pokemon: PokemonListItem) =>
  ({type: 'REMOVE_POKEMON_FROM_DRAWER', payload: pokemon})) as RemovePokemonFromDrawerAC

export const clearPokemonDrawer = ((selectedPokemon: PokemonListItem[]) => ({type: 'CLEAR_POKEMON_DRAWER'})) as ClearPokemonDrawerAC

export const openCompareDialog = (shouldOpen: boolean) => ({
  type: "OPEN_COMPARE_POKEMON_DIALOG",
  payload: shouldOpen
}) as any


