import React from 'react';
import {Image, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../types';

const Header = (): JSX.Element => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate('Home');
      }}>
      <Image
        source={require('../assets/logo.png')}
        resizeMode="contain"
        style={styles.logo}
      />
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  logo: {
    marginLeft: 20,
    width: 180,
    height: 80,
    marginBottom: 5,
  },
});

export default Header;
