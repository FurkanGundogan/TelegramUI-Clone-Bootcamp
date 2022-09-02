import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, { useContext, useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import { ChatListContext } from '../contexts/chatContext';
import { UserContext } from '../contexts/userContext';
const MessageInputArea = ({contact}) => {
    const {user} = useContext(UserContext)
   const {setChat} = useContext(ChatListContext)
   const [input, setinput] = useState("")
   const handleSendMessage = () =>{
    setChat(user?.id,contact?.id,input)
    setinput("")
   }
  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        <Entypo
          style={styles.smileIcon}
          name="emoji-happy"
          size={24}
          color="black"
        />
        <TextInput style={styles.input} value={input} onChangeText={(text)=>setinput(text)} placeholder="Message..."></TextInput>
      </View>
      <TouchableOpacity style={styles.iconWrapper} onPress={handleSendMessage}>
        <Ionicons style={styles.backIcon} name="send" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default MessageInputArea;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 4,
    position: 'absolute',
    bottom: 0,
  },
  inputBox: {
    backgroundColor: 'transparent',
    width: '85%',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  iconWrapper: {
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '85%',
  },
  smileIcon: {
    marginRight: 18,
    left: 8,
    color: 'gray',
  },
});