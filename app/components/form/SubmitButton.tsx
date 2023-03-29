import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import {useFormikContext} from 'formik';

import {colors} from '../../config';

type Props = {
  title: string;
};

const SubmitButton = ({title}: Props) => {
  const {handleSubmit}: any = useFormikContext();

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={handleSubmit} style={styles.container}>
        <View style={styles.btnTxtWrapper}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.white,
    borderRadius: 3,
    marginTop: 10,
  },
  container: {
    width: '80%',
    backgroundColor: colors.l_text,
    borderRadius: 3,
    height: 48,
    padding: 10,
    flexDirection: 'row',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.white,
  },
  btnTxtWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SubmitButton;
