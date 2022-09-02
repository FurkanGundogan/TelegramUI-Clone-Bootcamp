import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

const MessageInputArea = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        <Entypo
          style={styles.smileIcon}
          name="emoji-happy"
          size={24}
          color="black"
        />
        <TextInput style={styles.input}></TextInput>
      </View>
      <View style={styles.iconWrapper}>
        <Ionicons style={styles.backIcon} name="send" size={24} color="black" />
      </View>
    </View>
  );
};

export default MessageInputArea;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#c1c1c1',
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
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 32,
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