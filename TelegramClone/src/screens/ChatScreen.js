import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import useTheme from '../hooks/useTheme'

const ChatScreen = () => {
  const {theme}=useTheme()
  return (
    <View style={{...styles.container,backgroundColor:theme?.backgroundColor}}>
      <Text>ChatScreen</Text>
    </View>
  )
}

export default ChatScreen

const styles = StyleSheet.create({
  container:{
    backgroundColor:"white",
        flex:1
  }
})