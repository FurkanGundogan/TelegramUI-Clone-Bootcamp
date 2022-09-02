import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { ChatListContext } from '../contexts/chatContext'
import ChatListItem from './ChatListItem'

const ChatList = () => {
    const {chatList} = useContext(ChatListContext)
    
  return (
    <FlatList
    data={chatList}
    renderItem={({ item, index })=> <ChatListItem key={index} chat={item} />}
  />
  )
}

export default ChatList

const styles = StyleSheet.create({})