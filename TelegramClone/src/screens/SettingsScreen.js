import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {UserContext} from '../contexts/userContext';

const SettingsScreen = ({navigation}) => {
  const {setUser} = useContext(UserContext);
  const logout = () => {
    setUser(null);
  };
  return (
    <View>
      <Text>SettingsScreen</Text>
      <Button
        title="Theme"
        onPress={() => navigation.navigate('ThemeSettings')}
      />
      <Button
        title="Edit Profile"
        onPress={() => navigation.navigate('ProfileSettings')}
      />
      <Button title="Logout" onPress={logout} />
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({});
