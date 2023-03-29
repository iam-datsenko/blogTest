import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {FormikErrors, FormikTouched} from 'formik/dist/types';
import {colors} from '../../config';

type Props = {
  error: FormikErrors<string>;
  visible: FormikTouched<boolean>;
};

function ErrorMessage({error, visible}: Props) {
  if (!error || !visible) {
    return null;
  }

  return <Text style={styles.text}>{error}</Text>;
}

const styles = StyleSheet.create({
  text: {
    marginTop: 8,
    color: colors.g_text,
    fontWeight: 'bold',
  },
});

export default ErrorMessage;
