import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import useTheme from '../hooks/useTheme';
import { useNavigation } from '@react-navigation/native';

const ContactListItem = ({contact}) => {
  const {theme} = useTheme();
  const {id, firstName, lastName, profileImgUrl, username} = contact;
  const navigation=useNavigation()
  const handleNavigateToChat = () =>{
        navigation.navigate('Chat',{contact})
  }
  return (
    <TouchableOpacity onPress={handleNavigateToChat}>
      <View style={theme?.contactListItemContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: profileImgUrl,
            }}
          />
        </View>
        <View style={styles.titleAndTextWrapper}>
          <View style={styles.titleWrapper}>
            <Text style={theme?.titleText}>
              {firstName} {lastName}
            </Text>
          </View>
          <Text style={theme?.username}>@{username}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ContactListItem;

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
  titleTime: {
    flex: 1,
    right: -48,
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
