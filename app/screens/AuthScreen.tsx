import React, {useContext, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import * as Yup from 'yup';

import {colors} from '../config';
import AuthContext from '../components/AuthContext';
import {Context} from '../types';
import SocialButton from '../components/SocialButton';
import Form from '../components/form/Form';
import FormField from '../components/form/FormField';
import ErrorMessage from '../components/form/ErrorMessage';
import SubmitButton from '../components/form/SubmitButton';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

const AuthScreen = () => {
  const [loginFailed, setLoginFailed] = useState(false);
  const {user, signInGoogle, signInFacebook} = useContext<Context>(AuthContext);

  const handleSubmit = () => {
    try {
      setLoginFailed(false);
    } catch (error) {
      console.log(error);
      setLoginFailed(true);
    }
  };

  return (
    <View style={styles.container}>
      {user && <Text style={styles.text}>Name: {user.name}</Text>}

      <Form
        initialValues={{email: '', password: ''}}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}>
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon={false}
          keyboardType="email-address"
          name="email"
          placeholder="Your Email"
          textContentType="emailAddress"
        />

        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon={true}
          name="password"
          placeholder="Password"
          textContentType="password"
        />

        <ErrorMessage
          error="Invalid email and/or password."
          visible={loginFailed}
        />

        <SubmitButton title="Log In" />
      </Form>

      <Text style={styles.text}>or</Text>

      <SocialButton
        buttonTitle="Sign In with Google"
        btnType="google"
        color={colors.g_text}
        backgroundColor={colors.g_bg}
        onPress={() => signInGoogle()}
      />

      <SocialButton
        buttonTitle="Sign In with Facebook"
        btnType="facebook"
        color={colors.fb_text}
        backgroundColor={colors.fb_bg}
        onPress={() => signInFacebook()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 192,
    height: 48,
  },
  text: {
    color: colors.white,
    marginTop: 10,
    fontSize: 16,
  },
});

export default AuthScreen;
