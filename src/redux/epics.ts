import { map, mergeMap, filter } from 'rxjs/operators';
import { ofType, ActionsObservable } from 'redux-observable';
import { of, from } from 'rxjs';
import { GetPokemonAction, UpdateDrawerPokelist } from '../definitions';
import { PokemonListItem } from '../definitions';
import PokeAPI from "pokeapi-typescript";

type UpdateAction = {
  type: 'UPDATE_SELECTED_POKEMON';
  payload: PokemonListItem;
};

const formatSpeciesData = ({evolves_from_species, flavor_text_entries}: any) => ({
  evolves_from_species,
  flavor_text_entries: flavor_text_entries.filter((entry: {language: {name: string} }) =>
    entry.language.name === 'en')

});

const getFullPokemonData = (pokeUrl: string): Promise<any> => fetch(pokeUrl)
  .then(data => data.json())
  .then(data => fetch(data.species.url)
      .then(speciesData => speciesData.json())
      .then(speciesData => ({...data, species_data: formatSpeciesData(speciesData)}))
  );

export const getPokemonEpic = (action$: ActionsObservable<GetPokemonAction>) => action$.pipe(
  ofType('GET_POKEMON'),
  mergeMap(action => PokeAPI.Pokemon.list(50)),
  map((data) => {
    return ({type: 'UPDATE_POKEMON_LIST', payload: data.results});
  }));

export const getSelectedPokemon = (action$: ActionsObservable<UpdateAction>) =>
  action$.pipe(
    ofType('UPDATE_SELECTED_POKEMON'),
    filter((action) => Boolean(action.payload)),
    mergeMap(action => getFullPokemonData(action.payload.url)),
    map((data) => {
      return ({type: 'SET_SELECTED_POKEMON', payload: data });
    }));


export const onSelectedPokeItem = (action$: ActionsObservable<UpdateDrawerPokelist>) => action$.pipe(
  ofType('UPDATE_DRAWER_POKELIST'),
  mergeMap((action) => {
    return action.payload.id ?
      of(action.payload) :
      getFullPokemonData(action.payload.url)
  }),
  mergeMap(pokemon => from([
    { type: 'CACHE_POKEMON', payload: pokemon },
    { type: 'SET_TO_MULTI_SELECT', payload: pokemon }
    ]))
);
