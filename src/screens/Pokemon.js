import React, { useState, useEffect } from 'react';
import {  ScrollView } from 'react-native';
import { getPokemonDetailsApi } from '../api/pokemon';
import Header from '../components/pokemon/Header';
import Type from '../components/pokemon/Type';
import Stats from '../components/pokemon/stats';

export default function Pokemon (props) {
  const {navigation,route:{params}} =props;
  const [pokemon, setPokemon] = useState(null)
  console.log(params.id)

  // funcion anonima autoejecutable 
  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetailsApi(params.id)
        setPokemon(response)
      } catch (error) {
        navigation.goBack();
      }
    })()
  }, [params])

  if(!pokemon) return null;

  return (
    <ScrollView>
      <Header
       name={pokemon.name}
       order={pokemon.order}
       image={ pokemon.sprites.other["official-artwork"].front_default}
       type={pokemon.types[0].type.name}
      />
      <Type types={pokemon.types} />
      <Stats stats={pokemon.stats}/>


    </ScrollView>
  ); 
}