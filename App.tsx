import {NavigationContainer} from '@react-navigation/native';
import {Navigator} from './src/navigator/Navigator';
import React from 'react';

export default function App() {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}
