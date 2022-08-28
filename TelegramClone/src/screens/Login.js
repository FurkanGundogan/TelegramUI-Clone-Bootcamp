import {StyleSheet, Text, View} from 'react-native';
import React, { useContext } from 'react';

import {SafeAreaView, ScrollView} from 'react-native';
import { UserContext } from '../contexts/userContext';

const Login = () => {
 
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text>Loginnn</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
