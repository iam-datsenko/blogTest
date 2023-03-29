import React from 'react';
import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {RootStackParamList} from '../types';
import {colors} from '../config';

const Profile = (): JSX.Element => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate('Auth');
      }}>
      <View>
        <FontAwesome
          name="user-circle"
          size={24}
          color={colors.white}
          style={styles.profile}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  profile: {
    marginRight: 40,
  },
});

export default Profile;
