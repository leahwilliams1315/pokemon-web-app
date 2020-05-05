import React, {useState, FC} from 'react';
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from "@material-ui/core";
import {PokemonDialog} from "./pokemonDialog";
import { PokeCardProps } from '../definitions/redux';


const pokeNumber = RegExp(/\/(\d+)\//g);
const cleanPokemonNumberFromURL = (pokeUrl: string) =>
  // @ts-ignore
  pokeUrl.match(pokeNumber) ? (pokeUrl.match(pokeNumber)[0]).slice(1, -1) : 0;

const getPokemonImgUrl = (pokeUrl: string = ""): string => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${cleanPokemonNumberFromURL(pokeUrl)}.png`;
}

export const PokemonCard: FC<PokeCardProps> = ({pokemon, onLearnMore, onAddToPokelist}) => {

  return <Card>
    <CardActionArea>
      <CardMedia
        style={{height: 140}}
        image={getPokemonImgUrl(pokemon.url)}
        title={pokemon.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {pokemon.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica {pokemon.url}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary" onClick={() => onAddToPokelist(pokemon)}>
        Add to Pokelist
      </Button>
      <Button size="small" color="primary" onClick={() => onLearnMore(pokemon)}>
        Learn More
      </Button>
    </CardActions>
  </Card>
}
