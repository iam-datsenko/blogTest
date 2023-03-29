/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Platform} from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import PostScreen from '../screens/PostScreen';
import Header from '../components/Header';
import {colors} from '../config';
import Profile from '../components/Profile';
import AuthScreen from '../screens/AuthScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Group
        screenOptions={{
          headerRight: () => <Profile />,
          headerTitle: () => <Header />,
          headerTitleAlign: 'left',
          headerStyle: {
            height: Platform.OS === 'ios' ? 140 : 90,
            backgroundColor: colors.secondary,
          },
          headerShadowVisible: false,
        }}>
        <Stack.Screen
          component={HomeScreen}
          name="Home"
          options={{
            headerLeft: () => <View />,
          }}
        />
        <Stack.Screen
          component={PostScreen}
          name="Post"
          options={{
            headerLeft: () => <View />,
          }}
        />
      </Stack.Group>

      <Stack.Screen
        component={AuthScreen}
        name="Auth"
        options={{
          headerStyle: {
            backgroundColor: colors.secondary,
          },
          headerTintColor: colors.white,
          presentation: 'modal',
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
