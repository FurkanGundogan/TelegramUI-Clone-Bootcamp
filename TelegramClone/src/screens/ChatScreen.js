import {StyleSheet, Text, View} from 'react-native';
import React, { useContext } from 'react';
import useTheme from '../hooks/useTheme';
import {useRoute} from '@react-navigation/native';
import Header from '../components/ChatHeader';
import MessageArea from '../components/MessageArea';
import MessageInputArea from '../components/MessageInputArea';
import { ChatListContext } from '../contexts/chatContext';
import { UserContext } from '../contexts/userContext';

const ChatScreen = () => {
  const {theme} = useTheme();
  const route = useRoute();
  const {contact} = route?.params;
  const {user} = useContext(UserContext)
  const {getChat} = useContext(ChatListContext)
  /*
  [
    {
      sender:"",
      receiver:"",
      msgList:[{text:"asd",datetime:"asd"},{text:"asd",datetime:"asd"}]
    },
    {
      sender:"",
      receiver:"",
      msgList:[{text:"asd",datetime:"asd"},{text:"asd",datetime:"asd"}]
    }
  ] */
  return (
    <View
      style={{...styles.container, backgroundColor: theme?.backgroundColor}}>
      <Header contact={contact} />
      <MessageArea messages={getChat(user?.id,contact?.id)} />
      <MessageInputArea contact={contact} />
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingBottom: Platform.OS === 'android' ? 58 : 0,
  },
});
