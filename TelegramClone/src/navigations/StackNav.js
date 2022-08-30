import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/HomeScreen';
import Chat from '../screens/Chat';
import BottomNav from './BottomNav';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

const StackNav = () => {
    return (
        <Stack.Navigator>
          <Stack.Screen options={{
            headerShown:false
          }} name="BottomNav" component={BottomNav} />
          <Stack.Screen name="Chat" component={Chat} />
        </Stack.Navigator>
      )
}

export default StackNav

const styles = StyleSheet.create({})