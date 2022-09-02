import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const MessageArea = ({messages}) => {
  console.log(messages);
  return (
    <ScrollView style={styles.container}>
      {messages?.map((message, i) => (
        <View key={i} style={styles.dialog}>
          <Text style={styles.text}>{message?.text}</Text>
          <Text style={styles.time}>
            {new Date(message?.datetime).getHours()}:
            {new Date(message?.datetime).getMinutes()}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default MessageArea;

const styles = StyleSheet.create({
  container: {
    height: '70%',
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: '#c1c1c1',
  },
  dialog: {
    paddingLeft: 16,
    maxWidth: '50%',
    backgroundColor: 'white',
    borderColor: '#fafafa',
    borderWidth: 1,
    borderRadius: 14,
    marginTop: 8,
  },
  text: {
    padding: 6,
    fontWeight: '400',
    color: 'black',
    fontSize:16
  },
  time: {
    position:"absolute",
    right: 6,
    bottom: 4,
    fontSize: 12,
  },
});