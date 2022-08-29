import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from '../screens/SettingsScreen';


const Stack = createStackNavigator();

const SettingsNav = () => {
    return (
        <Stack.Navigator>
          <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
          
        </Stack.Navigator>
      )
}

export default SettingsNav

const styles = StyleSheet.create({})