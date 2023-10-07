import React from 'react';
import Situation from './ios/src/screens/situation';
import Login from './ios/src/screens/login';
import SignUp from './ios/src/screens/signup';
import FindId from './ios/src/screens/findid';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FindId"
          component={FindId}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Situation"
          component={Situation}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
