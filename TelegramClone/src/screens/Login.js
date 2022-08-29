import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';

import {SafeAreaView, ScrollView} from 'react-native';
import {UserContext} from '../contexts/userContext';
import LoginForm from '../components/LoginForm';

const Login = () => {
  const {user} = useContext(UserContext);
  return (
    <View>
      {user ? (
        <View>
          <Text>User Var </Text>
        </View>
      ) : (
        <LoginForm/>
      )}
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
