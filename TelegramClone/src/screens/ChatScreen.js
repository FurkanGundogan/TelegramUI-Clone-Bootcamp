import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useTheme from '../hooks/useTheme';
import {useRoute} from '@react-navigation/native';
import Header from '../components/ChatHeader';
import MessageArea from '../components/MessageArea';
import MessageInputArea from '../components/MessageInputArea';

const ChatScreen = () => {
  const {theme} = useTheme();
  const route = useRoute();
  const {contact} = route?.params;
  return (
    <View
      style={{...styles.container, backgroundColor: theme?.backgroundColor}}>
      <Header contact={contact} />
      <MessageArea messages={[{text: 'hello', datetime: new Date()},
    {text: 'hellohellohellohellohellohellohellohellohellohellohellohellohellohello', datetime: new Date()},
    {text: 'hellohellohellohellohellohellohellohellohellohellohellohellohellohello', datetime: new Date()},
    {text: 'hellohellohellohellohellohellohellohellohellohellohellohellohellohello', datetime: new Date()},
    {text: 'hellohellohellohellohellohellohellohellohellohellohellohellohellohello', datetime: new Date()},
    {text: 'hellohellohellohellohellohellohellohellohellohellohellohellohellohello', datetime: new Date()},
    {text: 'hellohellohellohellohellohellohellohellohellohellohellohellohellohello', datetime: new Date()},
    {text: 'hellohellohellohellohellohellohellohellohellohellohellohellohellohello', datetime: new Date()},
    ]} />
      <MessageInputArea />
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
