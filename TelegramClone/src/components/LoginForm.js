import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useContext, useState} from 'react';
import { UserContext } from '../contexts/userContext';

const LoginForm = () => {
  const {user,setUser} = useContext(UserContext);
    const initialState={
        firstname:"",
        lastname:"",
        phone:"",
        username:""
    }
  const [userInfo, setuserInfo] = useState(initialState);
  const handleChange=(e,name)=>{
    setuserInfo(prevState=>({
        ...prevState,
        [name]:e
    }))
    console.log(userInfo)
  }
  const submitUser = () => {
    setUser(userInfo)
    console.log("user set completed:",userInfo)
    console.log("user:",user);
  }
  return (
    <View>
      <Text>LoginPage</Text>
      <TextInput style={styles.textInput} onChangeText={(e)=>handleChange(e,"firstname")}/>
      <TextInput style={styles.textInput} onChangeText={(e)=>handleChange(e,"lastname")}/>
      <TextInput style={styles.textInput} onChangeText={(e)=>handleChange(e,"phone")}/>
      <TextInput style={styles.textInput} onChangeText={(e)=>handleChange(e,"username")}/>
      <Button title="Login" onPress={submitUser}/>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
    textInput:{
        borderWidth:1,
        borderColor:"black"
    }
});
