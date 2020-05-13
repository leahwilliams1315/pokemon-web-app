const DEFAULT_STATE: any[] = [];


export const pokemonListReducer = (state= DEFAULT_STATE, action: any) => {
  switch (action.type) {
    case 'UPDATE_POKEMON_LIST':
      return action.payload;
    default:
      return state;

  }
}

const selectedDefaultState = {
  single: null,
  multiSelectedPokemon: [],
  compareDialogIsOpen: false
}

export const selectedPokemonReducer = (state = selectedDefaultState, action: any) => {
  switch (action.type) {
    case 'SET_SELECTED_POKEMON':
      const update = action.payload ? {[action.payload.name]: action.payload} : {};
      return {...state, ...update, single: action.payload?.name || null};

    case 'SET_TO_MULTI_SELECT':
      return {...state, multiSelectedPokemon: state.multiSelectedPokemon.concat(action.payload)};

    case 'REMOVE_POKEMON_FROM_DRAWER':
      return {...state, multiSelectedPokemon: state.multiSelectedPokemon.filter((pokemon: any) => pokemon.id !== action.payload.id )};

    case 'CLEAR_POKEMON_DRAWER':
      return {...state, multiSelectedPokemon: []};

    case 'OPEN_COMPARE_POKEMON_DIALOG':
      return {...state, compareDialogIsOpen: action.payload};

    default:
      return state;
  }
}
