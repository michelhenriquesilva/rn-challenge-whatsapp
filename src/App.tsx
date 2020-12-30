import React from 'react';
import { StatusBar } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AppRoutes from './routes/app';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#2d4350" />
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </>
  );
};

export default App;
