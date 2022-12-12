import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import Navigation from './src/navigation/Navigation';

export default function App() {
  return (
    <NavigationContainer>
     <Navigation/>
    </NavigationContainer>
    
  );
}

