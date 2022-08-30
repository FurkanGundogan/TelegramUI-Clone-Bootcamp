import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, { useContext } from 'react';
import ChatScreen from './ChatScreen';
import { UserContext } from '../contexts/userContext';

const HomeScreen = ({navigation}) => {

  const {user} = useContext(UserContext);
  console.log('burada',user?.firstname);
  return (
    <View style={styles.container}>
      <Text onPress={()=>navigation.navigate('Chat')}>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
    </View>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor:"red",
    height: '100%',
  },
});
