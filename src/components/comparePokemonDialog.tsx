import React, { FC } from 'react';
import { ComparePokemonDialogProps, PokemonData } from '../definitions';
import {
  Button,
  Dialog, DialogActions,
  DialogContent,
  DialogContentText,
} from "@material-ui/core";
import { ComparePokemonGraph } from './lineGraph';

export type PokemonStatLineGraphPoint = {
    [pokemonNameOrName: string]: number | string;
};

const formatGraphData = (pokemon: PokemonData[]): PokemonStatLineGraphPoint[] =>
  pokemon[0]?.stats.map((stat, statIndex) => ({
    name: stat.stat.name,
    ...(pokemon.reduce((acc, pokemon) => ({ ...acc, [pokemon.name]: pokemon.stats[statIndex].base_stat }), {}))
  })) || [];

export const ComparePokemonDialog: FC<ComparePokemonDialogProps> = ({pokemon = [], open = false, dialogClosed, onComparePokemon}) => {
  return <Dialog
    keepMounted
    aria-labelledby="alert-dialog-slide-title"
    aria-describedby="alert-dialog-slide-description"
    maxWidth={false}
    onClose={() => {
      dialogClosed();
    }}
    open={open}
  >
    <DialogContent>
      <DialogContentText id="alert-dialog-slide-description">
        <ComparePokemonGraph pokemonData={formatGraphData(pokemon)} pokemon={pokemon} />
      </DialogContentText>

    </DialogContent>

    <DialogActions>
      <Button color="primary" onClick={() => dialogClosed()}>
        Agree
      </Button>
    </DialogActions>

  </Dialog>
}
