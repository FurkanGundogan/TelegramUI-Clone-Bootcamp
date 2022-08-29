import {StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import {UserContext} from '../contexts/userContext';
import LoginForm from '../components/LoginForm';
import StackNav from '../navigations/StackNav';

const Login = () => {
  const {user} = useContext(UserContext);
  return (
    <>
      {user ? (
        <StackNav/>
      ) : (
        <LoginForm />
      )}
    </>
  );
};

export default Login;

const styles = StyleSheet.create({});
