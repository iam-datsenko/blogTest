import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';

// import AuthNavigator from './app/navigation/AuthNavigator';
import AppNavigator from './app/navigation/AppNavigator';
import AuthContext from './app/components/AuthContext';
import {colors} from './app/config';
import {useAuth} from './app/hooks/useAuth';

function App(): JSX.Element {
  const {user, setUser, signInGoogle, signInFacebook} = useAuth();

  return (
    <AuthContext.Provider value={{user, setUser, signInGoogle, signInFacebook}}>
      <StatusBar barStyle="light-content" backgroundColor={colors.secondary} />

      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;
