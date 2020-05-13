import { PokemonData } from "./pokemon";

type Action = {
  type: string;
  payload?: unknown;
}

type AC<A extends Action, P extends unknown[] = []> = (...arg: P) => A;

export type UpdatePokemonAction = {
  type: 'UPDATE_POKEMON_LIST';
  payload: PokemonData[];
}

export type GetPokemonAction = {
  type: 'GET_POKEMON';
}

export type UpdateSelectedPokemon = {
  type: 'UPDATE_SELECTED_POKEMON';
  payload: PokemonData | null;
}

export type UpdatePokemonListAC = AC<UpdatePokemonAction, [PokemonData[]]>;


export type SetSelectedPokemon = {
  type: 'SET_SELECTED_POKEMON';
  payload: PokemonData;
}

export type UpdateSelectedPokemonAC = AC<UpdateSelectedPokemon, [PokemonData | null]>;

export type SetSelectedPokemonAC = AC<SetSelectedPokemon, [PokemonData | null]>;

export type GetPokemonAC = AC<GetPokemonAction>;

export type UpdateDrawerPokelist = {
  type: 'UPDATE_DRAWER_POKELIST';
  payload: PokemonData;
}

export type UpdateDrawerPokelistAC = AC<UpdateDrawerPokelist, [PokemonData]>;


export type RemovePokemonFromDrawerAC = () => ({
  type: 'REMOVE_POKEMON_FROM_DRAWER';
  payload: PokemonData;
})

export type ClearPokemonDrawerAC = () => ({
  type: 'CLEAR_POKEMON_DRAWER';
})

export type AppProps = {
  dispatchUpdateSelectedPokemon: UpdateSelectedPokemonAC;
  dispatchSetSelectedPokemon: SetSelectedPokemonAC;
  dispatchGetPokemon: GetPokemonAC;
  dispatchUpdateDrawerPokelist: UpdateDrawerPokelistAC;
  dispatchRemovePokemonFromDrawer: RemovePokemonFromDrawerAC;
  dispatchClearPokemonDrawer: ClearPokemonDrawerAC;
  pokemonList: PokemonData[];
  updatePokemonList?: UpdatePokemonListAC;
  singleSelectedPokemon: any; // todo, update this to the BIG pokemon data object type
  selectedPokemon: any;
  multiSelected: any[];
  comparePokemon: boolean;
  dispatchOpenCompareDialog: any;
}

export type OnLearnMore = (pokemon: PokemonData) => any;

export type OnAddToPokelist = (pokemon: PokemonData) => any;

export type OnComparePokemon = (pokemon: PokemonData) => any;

export type PokeCardProps = {
  pokemon: PokemonData ;
  onLearnMore: OnLearnMore;
  onAddToPokelist: OnAddToPokelist;
}

export type PokeDialogProps = {
  pokemonData: any;
  open: boolean;
  pokemonNumber: string | number;
  dialogClosed: () => any
}

export type ComparePokemonDialogProps = {
  pokemon: PokemonData[];
  open: boolean;
  dialogClosed: () => any;
  onComparePokemon?: OnComparePokemon
}

export type onRemovePokemon = (pokemon: PokemonData) => any;

export type PokeDrawerItemProps = {
  pokemonData: any;
  name: string;
  id: number;
  onRemovePokemon: onRemovePokemon;
}





export type openCompareDialog = {
  type: 'OPEN_COMPARE_POKEMON_DIALOG';
  payload: PokemonData | null;
}

export type OpenCompareDialogAC = AC<openCompareDialog, boolean>;

