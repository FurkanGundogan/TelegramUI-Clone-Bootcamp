import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useContext, useState} from 'react';
import {UserContext} from '../contexts/userContext';
import {Picker} from '@react-native-picker/picker';
const LoginForm = () => {
  const {user, setUser} = useContext(UserContext);
  const initialState = {
    firstname: '',
    lastname: '',
    country: '+90',
    phone: '',
    username: '',
  };
  const [userInfo, setuserInfo] = useState(initialState);
  const handleChange = (e, name) => {
    setuserInfo(prevState => ({
      ...prevState,
      [name]: e,
    }));
    console.log(userInfo);
  };
  const submitUser = () => {
    setUser(userInfo);
    console.log('user set completed:', userInfo);
    console.log('user:', user);
  };

  return (
    <View>
      <Text>LoginPage</Text>
      <View style={styles.phoneWrapper}>
        <View  style={styles.countryPicker}>
        <Picker
         
          selectedValue={userInfo?.country}
          onValueChange={(itemValue, itemIndex) =>
            handleChange(itemValue, 'country')
          }>
          <Picker.Item style={styles.pickerItem} label="+90" value="+90" />
          <Picker.Item style={styles.pickerItem} label="+60" value="+60" />
        </Picker>
        </View>
        <View style={styles.phoneInput}>
          <TextInput
            style={styles.textInput}
            placeholder="Phone"
            onChangeText={e => handleChange(e, 'phone')}
          />
        </View>
      </View>
      <TextInput
        style={styles.textInput}
        placeholder="Firstname"
        onChangeText={e => handleChange(e, 'firstname')}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Lastname"
        onChangeText={e => handleChange(e, 'lastname')}
      />

      <TextInput
        style={styles.textInput}
        placeholder="Username"
        onChangeText={e => handleChange(e, 'username')}
      />

      <Button title="Login" onPress={submitUser} />
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: 'black',
    fontSize: 18,
    borderRadius: 8,
    marginLeft: 32,
    marginRight: 32,
    marginBottom: 16,
    height: 40,
    padding: 8,
  },
  phoneWrapper: {
    flexDirection: 'row',
  },
  phoneInput: {
    flex: 2,
  },
  countryPicker: {
    flex: 1,
    height: 40,
    paddingLeft:16,
    alignContent:"center",
    marginTop:-4,
    marginRight:-32,
    
  },
  pickerItem: {
    fontSize: 18,
  },
});
