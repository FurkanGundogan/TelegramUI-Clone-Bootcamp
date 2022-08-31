import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ContactScreen from '../screens/ContactScreen';
import SettingsNav from './SettingsNav';
import IconFeather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconContact from 'react-native-vector-icons/AntDesign';
const Tab = createBottomTabNavigator();
const BottomNav = () => {
    return (
        <Tab.Navigator initialRouteName='Messages'>
          
          <Tab.Screen name="Contact" component={ContactScreen} 
          options={{
            tabBarIcon:()=> <IconContact
            name="contacts"
            size={28}
            style={styles.phoneIcon}
          />
          }}
          />
          <Tab.Screen name="Messages" component={HomeScreen}
          options={{
            tabBarIcon:()=> <MaterialCommunityIcons
            name="message-reply-text"
            size={28}
            style={styles.phoneIcon}
          />
          }}
          />
          <Tab.Screen name="SettingsNav"options={{
            headerShown:false,
            tabBarIcon:()=> <MaterialCommunityIcons
            name="account-settings-outline"
            size={28}
            style={styles.phoneIcon}
          />

          }} component={SettingsNav} />
        </Tab.Navigator>
      )
}

export default BottomNav

const styles = StyleSheet.create({})