import { StyleSheet} from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import BottomNav from './BottomNav';
import ChatScreen from '../screens/ChatScreen';

const Stack = createStackNavigator();

const StackNav = () => {
    return (
        <Stack.Navigator>
          <Stack.Screen options={{
            headerShown:false
          }} name="BottomNav" component={BottomNav} />
          <Stack.Screen name="Chat" component={ChatScreen} 
          options={{headerShown:false}}
          />
        </Stack.Navigator>
      )
}

export default StackNav

const styles = StyleSheet.create({})