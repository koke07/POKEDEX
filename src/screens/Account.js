import React from 'react'
// safe area view sirve para que la pantalla se ajuste al telefono , de no necesitarse se usa un view 
//import { SafeAreaView, Text } from 'react-native'
import { Text } from 'react-native'
// libreria para usar en android 
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Account() {
  return (
   <SafeAreaView>
      <Text>Account</Text>
   </SafeAreaView>
  )
}
