/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import UserProvider from './src/providers/UserProvider';
import Login from './src/screens/Login';
const App = () => {
  return (
    <SafeAreaProvider>
      <UserProvider>
        <Login />
      </UserProvider>
    </SafeAreaProvider>
  );
};

export default App;
