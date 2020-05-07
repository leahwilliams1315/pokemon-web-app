import React, { FC } from 'react';
import { IconButton, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { PokeDrawerItemProps } from '../definitions';


export const DrawerListItem: FC<PokeDrawerItemProps> = ({name, id, pokemonData, onRemovePokemon}) => {
  return <ListItem className="drawer-list-item">
    <ListItemIcon>
      <img src={pokemonData.sprites.front_default} alt={'pokemon front'}/>
    </ListItemIcon>
    <ListItemText className="drawer-text" primary={name}/>
    <IconButton aria-label="delete" onClick={() => onRemovePokemon(pokemonData)}>
      x
    </IconButton>
  </ListItem>
}
