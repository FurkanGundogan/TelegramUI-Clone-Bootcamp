import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { UserContext } from '../contexts/userContext';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const SettingsForm = () => {
    const navigation=useNavigation()
    const {user, setUser} = useContext(UserContext);
 
  const [userInfo, setuserInfo] = useState({...user});
  const handleChange = (e, name) => {
    setuserInfo(prevState => ({
      ...prevState,
      [name]: e,
    }));
  };
  const submitUser = () => {
    setUser(userInfo);
    alert("Your account successfully updated.")
    navigation.navigate('Settings')
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ACCOUNT</Text>
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
      <Text style={styles.buttonText}>SAVE</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SettingsForm

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        flex:1,paddingTop:128
      },
      title:{
        fontWeight:"800",
        fontSize:24,
        color:"#00adf7",
        textAlign:"center",
        fontFamily:"Calibri",
        textShadowRadius:4,
        textShadowColor: "white",
        marginBottom:32
      },
      textInput: {
        backgroundColor:"white",
        color:"gray",
        fontSize: 12,
        borderRadius: 8,
        marginLeft: 32,
        marginRight: 32,
        marginBottom: 16,
        height: 40,
        padding: 8,
        borderColor:"#00adf7",
        borderWidth:1,
        
        fontWeight:"400"
      },
      submitbutton:{
        marginTop:8,
        marginLeft:32,
        marginRight:32,
        backgroundColor:"#00adf7",
        padding:8,
        borderRadius:8,
      },
      buttonText:{
        color:"white",
        fontWeight:"800",
        fontSize: 12,
        textAlign:"center",
      }
})