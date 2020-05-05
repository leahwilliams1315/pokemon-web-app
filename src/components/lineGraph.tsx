import React from 'react';
// @ts-ignore
import {CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis,} from 'recharts';
import { PokemonStatLineGraphPoint } from "./comparePokemonDialog";
import { PokemonData } from "../definitions";

const randomColor = () => `#${Math.floor(Math.random()*16777215).toString(16)}`;

export const ComparePokemonGraph = ({pokemonData, pokemon}: {pokemonData?: PokemonStatLineGraphPoint[], pokemon: PokemonData[]}) => {
  return (
    <LineChart
      width={750}
      height={480}
      data={pokemonData}
      margin={{
        top: 5, right: 30, left: 20, bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3"/>
      <XAxis dataKey="name"/>
      <YAxis/>
      <Tooltip/>
      <Legend/>

      {pokemon.map(poke => <Line type="monotone" stroke={randomColor()} dataKey={poke.name} />)}

    </LineChart>
  );
}
