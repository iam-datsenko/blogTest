import {View, Text, StyleSheet, Button} from 'react-native';
import React from 'react';
import {colors} from '../config';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId: '194936597024-qmofabeou0j699fo4gbkf1qe1qb8ec84',
});

const AuthScreen = () => {
  return (
    <View style={styles.container}>
      <Text>AuthScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
});

export default AuthScreen;
