import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/HomeScreen';
import { globalColors } from '../theme/appTheme';

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: globalColors.grey2},
      }}>
      <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
      {/* <Stack.Screen
        name="Animation101Screen"
        component={Animation101Screen}></Stack.Screen>
      <Stack.Screen
        name="Animation102Screen"
        component={Animation102Screen}></Stack.Screen> */}
    </Stack.Navigator>
  );
};
