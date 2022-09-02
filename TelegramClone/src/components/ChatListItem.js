import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ChatListItem = ({chatId}) => {
    
  return (
    <View>
      <Text>{chatId}</Text>
    </View>
  )
}

export default ChatListItem

const styles = StyleSheet.create({})