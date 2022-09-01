import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ContactScreen from '../screens/ContactScreen';
import SettingsNav from './SettingsNav';
import IconFeather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconContact from 'react-native-vector-icons/AntDesign';
import useTheme from '../hooks/useTheme';

const Tab = createBottomTabNavigator();
const BottomNav = () => {
  const {theme} = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="Messages"
      screenOptions={{
        tabBarStyle: theme?.tabBar,
        tabBarItemStyle: theme?.tabBarItem,
        tabBarInactiveTintColor: theme?.type === 'dark' ? 'white' : 'black',
        tabBarActiveTintColor: theme?.type === 'dark' ? 'orange' : '#003af7',
      }}>
      <Tab.Screen
        name="Contacts"
        component={ContactScreen}
        options={{
          tabBarIcon: () => (
            <IconContact name="contacts" size={28} style={theme?.tabBarIcon} />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="message-reply-text"
              size={28}
              style={theme?.tabBarIcon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="account-settings-outline"
              size={28}
              style={theme?.tabBarIcon}
            />
          ),
        }}
        component={SettingsNav}
      />
    </Tab.Navigator>
  );
};

export default BottomNav;

const styles = StyleSheet.create({});
