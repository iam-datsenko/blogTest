/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar, View} from 'react-native';

import HomeScreen from './app/screens/HomeScreen';
import PostScreen from './app/screens/PostScreen';
import AuthScreen from './app/screens/AuthScreen';
import Header from './app/components/Header';
import {colors} from './app/config';

const Stack = createStackNavigator();

function App(): JSX.Element {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Auth"
          screenOptions={{
            headerTitle: () => <Header />,
            headerTitleAlign: 'left',
            headerStyle: {
              height: 140,
              backgroundColor: colors.secondary,
            },
            headerShadowVisible: false,
          }}>
          <Stack.Screen component={AuthScreen} name="Auth" />
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
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
