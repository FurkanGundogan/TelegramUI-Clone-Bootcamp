import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useTheme from '../hooks/useTheme';

const MessageArea = ({messages}) => {
    const {theme}=useTheme()
  console.log(messages);
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.dialogWrap}>
      {messages?.map((message, i) => (
        <View key={i} style={styles.dialog}>
          <Text style={styles.text}>{message?.text}</Text>
          <Text style={styles.time}>
            {new Date(message?.datetime).getHours()}:
            {"0"+new Date(message?.datetime).getMinutes()}
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
  dialogWrap:{
    alignItems:"flex-end"
  },
  dialog: {
    minWidth:100,
    padding:8,
    maxWidth: '50%',
    backgroundColor: 'white',
    borderColor: '#fafafa',
    borderWidth: 1,
    borderRadius: 14,
    marginTop: 8,
  },
  text: {
    left:-2,
    padding: 6,
    fontWeight: '400',
    color: 'black',
    fontSize:16
  },
  time: {
    position:"absolute",
    right: 16,
    bottom: 4,
    fontSize: 12,
  },
});