import React, {FC} from 'react';
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from "@material-ui/core";
import { PokeCardProps } from '../definitions';


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
        <Typography gutterBottom variant="h5" component="h2" className="pokemon-name">
          {pokemon.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {pokemon.species_data.flavor_text_entries[0].flavor_text}
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
