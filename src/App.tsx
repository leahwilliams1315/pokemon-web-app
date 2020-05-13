import React, { useEffect } from 'react';
import './App.css';
import { connect } from "react-redux";
import { PokemonCard } from "./components/pokemonCard";
import { Grid, Drawer, Button, AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
// import { MenuIcon } from '@material-ui/icons';
import { AppProps } from './definitions';
import { PokemonDialog } from "./components/pokemonDialog";
import { DrawerListItem } from "./components/drawerItem";
import {
  clearPokemonDrawer,
  getPokemon, openCompareDialog,
  removePokemonFromDrawer,
  setSelectedPokemon,
  updateDrawerPokelist,
  updateSelectedPokemon
} from './redux/actions'
import { ComparePokemonDialog } from "./components/comparePokemonDialog";

const App: React.FC<AppProps> = (
  { pokemonList,
    dispatchGetPokemon,
    dispatchUpdateSelectedPokemon,
    selectedPokemon,
    comparePokemon,
    singleSelectedPokemon,
    dispatchSetSelectedPokemon,
    dispatchUpdateDrawerPokelist,
    multiSelected,
    dispatchRemovePokemonFromDrawer,
    dispatchClearPokemonDrawer,
    dispatchOpenCompareDialog
  }) => {

  useEffect(() => {
    dispatchGetPokemon();
  }, [dispatchGetPokemon]);
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            {/*<MenuIcon />*/}
          </IconButton>
          <Typography variant="h6">
            Pokemon Index
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="main">
      <Grid style={Boolean(multiSelected.length) ? {width: 'calc(100% - 275px)'} : {}} container spacing={4}>
        {pokemonList.map(pokemon => <Grid key={pokemon.id} item xs={3}>
          <PokemonCard
            onLearnMore={dispatchUpdateSelectedPokemon}
            pokemon={pokemon}
            onAddToPokelist={(poke) => dispatchUpdateDrawerPokelist(poke)}
          />
        </Grid>)}
      </Grid>

      <PokemonDialog
        pokemonNumber={singleSelectedPokemon?.id}
        open={singleSelectedPokemon}
        pokemonData={singleSelectedPokemon}
        dialogClosed={() => dispatchSetSelectedPokemon(null)}
      />

      <ComparePokemonDialog
        open={comparePokemon}
        pokemon={multiSelected}
        dialogClosed={() => dispatchOpenCompareDialog(false)}
      />

      <Drawer
        className="drawer"
        variant="persistent"
        anchor="right"
        classes={{paper: 'poke-drawer'}}
        open={Boolean(multiSelected.length)}
      >
        {multiSelected.map(pokemon =>
          <DrawerListItem
            key={pokemon.id}
            pokemonData={pokemon}
            name={pokemon.name}
            onRemovePokemon={dispatchRemovePokemonFromDrawer}
            id={pokemon.id}/>)}
        <Button onClick={() => {dispatchClearPokemonDrawer()}}>Clear All</Button>
        <Button onClick={() => dispatchOpenCompareDialog(true)}>Compare Pokemon</Button>
      </Drawer>
      </div>
    </div>
  );
}

export default connect((state: any) => {
  return ({
      pokemonList: state.pokemonList,
      selectedPokemon: state.selectedPokemon,
      singleSelectedPokemon: state.selectedPokemon.single && state.selectedPokemon[state.selectedPokemon.single],
      multiSelected: state.selectedPokemon.multiSelectedPokemon,
      comparePokemon: state.selectedPokemon.compareDialogIsOpen,
    })
  },
  {
    dispatchGetPokemon: getPokemon,
    dispatchSetSelectedPokemon: setSelectedPokemon,
    dispatchUpdateSelectedPokemon: updateSelectedPokemon,
    dispatchUpdateDrawerPokelist: updateDrawerPokelist,
    dispatchRemovePokemonFromDrawer: removePokemonFromDrawer,
    dispatchClearPokemonDrawer: clearPokemonDrawer,
    dispatchOpenCompareDialog: openCompareDialog
  })(App);
