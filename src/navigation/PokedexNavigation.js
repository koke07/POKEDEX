import React from "react";
import { View, Text } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import Pokedex from '../screens/Pokedex';
import Pokemon from '../screens/Pokemon';

const Stack = createStackNavigator(); 

export default function PokedexNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Pokedex' component={Pokedex} options={{
          title:"",
          headerTransparent:true
        }} />
         <Stack.Screen name='Pokemon' component={Pokemon} />
    </Stack.Navigator>
  )
}