import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import useTheme from '../hooks/useTheme'

const ContactScreen = () => {
  const {theme}=useTheme()
  return (
    <View style={{...styles.container,backgroundColor:theme?.backgroundColor}}>
      <Text>ContactScreen</Text>
    </View>
  )
}

export default ContactScreen

const styles = StyleSheet.create({
  container:{
    backgroundColor:"white",
        flex:1
  }
})