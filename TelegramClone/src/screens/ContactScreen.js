import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import useTheme from '../hooks/useTheme'
import ContactList from '../components/ContactList'

const ContactScreen = () => {
  const {theme}=useTheme()
  return (
    <View style={{...styles.container,backgroundColor:theme?.backgroundColor}}>
      <ContactList/>
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