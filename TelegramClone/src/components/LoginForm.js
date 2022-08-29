import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

const LoginForm = () => {
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
  
  return (
    <View>
      <Text>LoginPage</Text>
      <TextInput style={styles.textInput} onChangeText={(e)=>handleChange(e,"firstname")}/>
      <TextInput style={styles.textInput} onChangeText={(e)=>handleChange(e,"lastname")}/>
      <TextInput style={styles.textInput} onChangeText={(e)=>handleChange(e,"phone")}/>
      <TextInput style={styles.textInput} onChangeText={(e)=>handleChange(e,"username")}/>
      <Button title="Login"/>
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
