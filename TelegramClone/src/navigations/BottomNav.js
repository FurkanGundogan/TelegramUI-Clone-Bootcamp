import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ContactScreen from '../screens/ContactScreen';
import SettingsNav from './SettingsNav';

const Tab = createBottomTabNavigator();
const BottomNav = () => {
    return (
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Contact" component={ContactScreen} />
          <Tab.Screen name="SettingsNav" component={SettingsNav} />
        </Tab.Navigator>
      )
}

export default BottomNav

const styles = StyleSheet.create({})