import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { ChatListContext } from '../contexts/chatContext'
import ChatListItem from './ChatListItem'

const ChatList = () => {
    const {chatList} = useContext(ChatListContext)
    
  return (
    <Text>abc</Text>
    /*<FlatList
    data={Object.keys(chatList)}
    renderItem={({ item, index })=> <ChatListItem key={index} chatId={item} />}
  />*/
  )
}

export default ChatList

const styles = StyleSheet.create({})