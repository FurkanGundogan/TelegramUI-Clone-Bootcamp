import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {UserContext} from '../contexts/userContext';
import {Picker} from '@react-native-picker/picker';
const LoginForm = () => {
  const {user, setUser} = useContext(UserContext);
  const initialState = {
    id: '0',
    firstname: '',
    lastname: '',
    country: '+60',
    phone: '',
    username: '',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Jason_Statham_at_Marvel-Rolle.jpg/640px-Jason_Statham_at_Marvel-Rolle.jpg',
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
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN</Text>
      <View style={styles.phoneWrapper}>
        <View style={styles.countryPicker}>
          <Picker
            style={styles.picker}
            selectedValue={userInfo?.country}
            onValueChange={(itemValue, itemIndex) =>
              handleChange(itemValue, 'country')
            }>
            <Picker.Item style={styles.pickerItem} label="+60" value="+60" />
            <Picker.Item style={styles.pickerItem} label="+70" value="+70" />
            <Picker.Item style={styles.pickerItem} label="+90" value="+90" />
          </Picker>
        </View>
        <View style={styles.phoneInputWrapper}>
          <TextInput
            style={styles.phoneInput}
            placeholder="Phone"
            value={userInfo?.phone}
            onChangeText={e => handleChange(e, 'phone')}
          />
        </View>
      </View>
      <TextInput
        style={styles.textInput}
        placeholder="Firstname"
        value={userInfo?.firstname}
        onChangeText={e => handleChange(e, 'firstname')}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Lastname"
        value={userInfo?.lastname}
        onChangeText={e => handleChange(e, 'lastname')}
      />

      <TextInput
        style={styles.textInput}
        placeholder="Username"
        value={userInfo?.username}
        onChangeText={e => handleChange(e, 'username')}
      />
      <TouchableOpacity style={styles.submitbutton} onPress={submitUser}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingTop: 128,
  },
  title: {
    fontWeight: '800',
    fontSize: 24,
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Calibri',
    textShadowRadius: 4,
    textShadowColor: '#33382c',
    marginBottom: 32,
  },
  textInput: {
    backgroundColor: 'white',
    color: 'gray',
    fontSize: 12,
    borderRadius: 8,
    marginLeft: 32,
    marginRight: 32,
    marginBottom: 16,
    height: 40,
    padding: 8,
    borderColor: 'orange',
    borderWidth: 1,

    fontWeight: '400',
  },
  phoneWrapper: {
    flexDirection: 'row',
  },
  phoneInputWrapper: {
    flex: 5,
  },
  countryPicker: {
    flex: 2,
    height: 40,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'orange',
    justifyContent: 'center',
    borderRadius: 8,
    marginLeft: 32,
  },
  pickerItem: {
    fontSize: 12,
    color: 'gray',
    fontWeight: '800',
  },
  phoneInput: {
    fontSize: 12,
    backgroundColor: 'white',
    borderRadius: 8,
    marginLeft: 0,
    marginRight: 32,
    marginBottom: 16,
    height: 40,
    padding: 8,
    marginLeft: 16,
    color: 'gray',
    fontWeight: '400',
    borderColor: 'orange',
    borderWidth: 1,
  },
  submitbutton: {
    marginTop: 8,
    marginLeft: 32,
    marginRight: 32,
    backgroundColor: 'orange',
    padding: 8,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: '800',
    fontSize: 12,
    textAlign: 'center',
  },
});
