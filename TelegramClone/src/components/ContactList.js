import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {contactDataList} from '../assets/MockContact';
import ContactListItem from './ContactListItem';
const ContactList = () => {
  return (
    <View>
      <FlatList
        data={contactDataList}
        renderItem={({ item, index })=> <ContactListItem key={index} contact={item} />}
      />
    </View>
  );
};

export default ContactList;

const styles = StyleSheet.create({});
