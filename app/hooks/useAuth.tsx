import {useState, useEffect} from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {LoginManager, AccessToken, Profile} from 'react-native-fbsdk-next';

import {User} from '../types';

export const useAuth = () => {
  const [user, setUser] = useState<User | undefined>();

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['email'],
      webClientId:
        '194936597024-qk9srabsm107j25481vdjskogk3cnj3b.apps.googleusercontent.com',
    });
  }, []);

  const signInFacebook = async () => {
    try {
      const result = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
      ]);

      if (result.isCancelled) {
        console.log('Login cancelled');
        return;
      }

      const data = await AccessToken.getCurrentAccessToken();

      if (!data) {
        console.log('Something went wrong obtaining access token');
      } else {
        const facebookCredential = auth.FacebookAuthProvider.credential(
          data?.accessToken,
        );

        await auth().signInWithCredential(facebookCredential);
      }

      const userInfo = await Profile.getCurrentProfile();
      if (userInfo) {
        setUser({
          name: userInfo.name,
          id: userInfo.userID,
          email: userInfo.email,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const signInGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      const userInfo = await GoogleSignin.signIn();
      setUser({
        name: userInfo.user.name,
        id: userInfo.user.id,
        email: userInfo.user.email,
      });

      const googleCredential = auth.GoogleAuthProvider.credential(
        userInfo.idToken,
      );

      await auth().signInWithCredential(googleCredential);
    } catch (error) {
      console.log(error);
    }
  };

  return {user, setUser, signInGoogle, signInFacebook};
};
