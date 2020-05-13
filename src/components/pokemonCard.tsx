import React, {FC} from 'react';
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from "@material-ui/core";
import { PokeCardProps } from '../definitions';

const getPokemonImgUrl = (pokeID: number): string => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeID}.png`;
}

export const PokemonCard: FC<PokeCardProps> = ({pokemon, onLearnMore, onAddToPokelist}) => {

  return <Card style={{height: 375}}>
    <CardActionArea>
      <CardMedia
        style={{height: 177}}
        image={getPokemonImgUrl(pokemon.id)}
        title={pokemon.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2" className="pokemon-name">
          {pokemon.name}
        </Typography>
        <Typography style={{overflow: "scroll", height: "80px"}} variant="body2" color="textSecondary" component="p">
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
