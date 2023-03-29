/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Platform} from 'react-native';

import AuthScreen from '../screens/AuthScreen';
import Header from '../components/Header';
import {colors} from '../config';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Auth"
      screenOptions={{
        headerTitle: () => <Header />,
        headerTitleAlign: 'left',
        headerStyle: {
          height: Platform.OS === 'ios' ? 140 : 90,
          backgroundColor: colors.secondary,
        },
        headerShadowVisible: false,
      }}>
      <Stack.Screen component={AuthScreen} name="Auth" />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
