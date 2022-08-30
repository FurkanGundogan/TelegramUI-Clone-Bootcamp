import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from '../screens/SettingsScreen';
import ThemeSettingsScreen from '../screens/ThemeSettingsScreen';
import ProfileSettingsScreen from '../screens/ProfileSettingsScreen';


const Stack = createStackNavigator();

const SettingsNav = () => {
    return (
        <Stack.Navigator>
          <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
          <Stack.Screen name="ThemeSettings" component={ThemeSettingsScreen} />
          <Stack.Screen name="ProfileSettings" component={ProfileSettingsScreen} />
          
        </Stack.Navigator>
      )
}

export default SettingsNav

const styles = StyleSheet.create({})