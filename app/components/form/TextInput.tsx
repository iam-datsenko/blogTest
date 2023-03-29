import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {colors} from '../../config';

type Props = {
  icon: boolean;
  onBlur: () => void;
  onChangeText: (text: string) => void;
  placeholder: string;
  value: string;
};

const AppTextInput = ({icon, ...otherProps}: Props) => {
  const [isHide, setIsHide] = useState(true);

  return (
    <View style={styles.container}>
      <TextInput
        secureTextEntry={isHide && icon}
        {...otherProps}
        placeholderTextColor={colors.white}
        style={styles.text}
      />

      {icon && (
        <TouchableWithoutFeedback onPress={() => setIsHide(!isHide)}>
          <View>
            <FontAwesome
              name={isHide ? 'eye-slash' : 'eye'}
              size={24}
              color={colors.white}
            />
          </View>
        </TouchableWithoutFeedback>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    width: '80%',
    height: 48,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 3,
    backgroundColor: colors.secondary,
    marginTop: 10,
    alignItems: 'center',
  },
  text: {
    color: colors.white,
  },
});

export default AppTextInput;
