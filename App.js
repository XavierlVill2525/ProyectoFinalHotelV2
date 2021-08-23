import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Register from './Screens/register';
import Home from './Screens/home'
import Login from './Screens/login'
import Services from './Screens/services'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.espacio}></Text>

      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}></Stack.Screen>
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="Register" component={Register}></Stack.Screen>
        <Stack.Screen name="Services" component={Services}></Stack.Screen>
      </Stack.Navigator>

      {/*<StatusBar style="auto" />*/}
    </View>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#36485f',
    paddingLeft: 15,
    paddingRight: 15,
  },
  espacio: {
    fontSize: 5,
    color: '#fff',
    paddingBottom: 10,
    marginBottom: 10,
    borderBottomColor: '#199187',
  },
});
