import { applyMiddleware, combineReducers, createStore } from "redux";
import { pokemonListReducer, selectedPokemonReducer } from "./reducers";
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { getPokemonEpic, getSelectedPokemon, onSelectedPokeItem } from "./epics";


const epicMiddleware = createEpicMiddleware();

export const rootEpic = combineEpics(
  getPokemonEpic,
  getSelectedPokemon,
  onSelectedPokeItem
);


export const store = createStore(
  combineReducers({
    pokemonList: pokemonListReducer,
    selectedPokemon: selectedPokemonReducer,
  }),
  applyMiddleware(epicMiddleware)
)

epicMiddleware.run(rootEpic);
