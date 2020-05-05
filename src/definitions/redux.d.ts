import { CombinedPokemonType, PokemonData, PokemonListItem } from "./pokemon";

type Action = {
  type: string;
  payload?: unknown;
}

type AC<A extends Action, P extends unknown[] = []> = (...arg: P) => A;

export type UpdatePokemonAction = {
  type: 'UPDATE_POKEMON_LIST';
  payload: PokemonListItem[];
}

export type GetPokemonAction = {
  type: 'GET_POKEMON';
}

export type UpdateSelectedPokemon = {
  type: 'UPDATE_SELECTED_POKEMON';
  payload: CombinedPokemonType | null;
}

export type UpdatePokemonListAC = AC<UpdatePokemonAction, [PokemonListItem[]]>;


export type SetSelectedPokemon = {
  type: 'SET_SELECTED_POKEMON';
  payload: CombinedPokemonType;
}

export type UpdateSelectedPokemonAC = AC<UpdateSelectedPokemon, [CombinedPokemonType | null]>;

export type SetSelectedPokemonAC = AC<SetSelectedPokemon, [CombinedPokemonType | null]>;

export type GetPokemonAC = AC<GetPokemonAction>;

export type UpdateDrawerPokelist = {
  type: 'UPDATE_DRAWER_POKELIST';
  payload: CombinedPokemonType;
}

export type UpdateDrawerPokelistAC = AC<UpdateDrawerPokelist, [CombinedPokemonType]>;


export type RemovePokemonFromDrawerAC = () => ({
  type: 'REMOVE_POKEMON_FROM_DRAWER';
  payload: PokemonListItem;
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
  pokemonList: PokemonListItem[];
  updatePokemonList?: UpdatePokemonListAC;
  singleSelectedPokemon: any; // todo, update this to the BIG pokemon data object type
  selectedPokemon: any;
  multiSelected: any[];
  comparePokemon: boolean;
  dispatchOpenCompareDialog: any;
}

export type OnLearnMore = (pokemon: CombinedPokemonType) => any;

export type OnAddToPokelist = (pokemon: CombinedPokemonType) => any;

export type OnComparePokemon = (pokemon: CombinedPokemonType) => any;

export type PokeCardProps = {
  pokemon: PokemonData & PokemonListItem;
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

export type onRemovePokemon = (pokemon: PokemonListItem) => any;

export type PokeDrawerItemProps = {
  pokemonData: any;
  name: string;
  id: number;
  onRemovePokemon: onRemovePokemon;
}





export type openCompareDialog = {
  type: 'OPEN_COMPARE_POKEMON_DIALOG';
  payload: CombinedPokemonType | null;
}

export type OpenCompareDialogAC = AC<openCompareDialog, boolean>;

