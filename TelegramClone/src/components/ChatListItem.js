import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext} from 'react';
import {UserContext} from '../contexts/userContext';
import {contactDataList} from '../assets/MockContact';
import {useNavigation} from '@react-navigation/native';
import useTheme from '../hooks/useTheme';
const ChatListItem = ({chat}) => {
  const {theme} = useTheme();
  const {id, messages} = chat;
  console.log('chat:', chat);
  const {user} = useContext(UserContext);
  const contact = contactDataList.filter(c => id == user?.id + c?.id)[0];
  const navigation = useNavigation();
  const handleNavigateToChat = () => {
    navigation.navigate('Chat', {contact});
  };
  return (
    <TouchableOpacity onPress={handleNavigateToChat}>
      <View style={theme?.contactListItemContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: contact?.profileImgUrl,
            }}
          />
        </View>
        <View style={styles.titleAndTextWrapper}>
          <View style={styles.titleWrapper}>
            <Text style={theme?.titleText}>
              {contact?.firstName} {contact?.lastName}
            </Text>
            <Text style={theme?.chatListTitleTime}>
              {messages.length === 1
                ? new Date(messages[0].timestamp).getHours()+":"+new Date(messages[0].timestamp).getMinutes()
                : new Date(messages[messages.length - 1].timestamp).getHours()+":"+new Date(messages[messages.length - 1].timestamp).getMinutes()}
            </Text>
          </View>
          <Text style={theme?.username}>
            {messages.length === 1
              ? messages[0].text
              : messages[messages.length - 1].text}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ChatListItem;

const styles = StyleSheet.create({
  contactListItemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    flexDirection: 'row',
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    alignItems: 'center',
  },

  titleWrapper: {
    flexDirection: 'row',
  },
  titleAndTextWrapper: {
    marginLeft: 16,
    width: '100%',
  },
  titleText: {
    fontWeight: '800',
    color: 'black',
    fontSize: 16,
    flex: 1,
  },
  chatListTitleTime: {
    flex: 1,
    right: -48,
    color:"white",
  },
  imageContainer: {
    width: 50,
    height: 50,
    borderRadius: 30,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'gray',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
