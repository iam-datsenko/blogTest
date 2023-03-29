import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {colors} from '../config';

type Props = {
  buttonTitle: string;
  btnType: string;
  color: string;
  backgroundColor: string;
  onPress: () => void;
};

const SocialButton = ({
  buttonTitle,
  btnType,
  color,
  backgroundColor,
  onPress,
}: Props) => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        style={[styles.buttonContainer, {backgroundColor}]}
        onPress={onPress}>
        <View style={styles.iconWrapper}>
          <FontAwesome
            name={btnType}
            style={styles.icon}
            size={22}
            color={color}
          />
        </View>

        <View style={styles.btnTxtWrapper}>
          <Text style={[styles.buttonText, {color: color}]}>{buttonTitle}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SocialButton;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.white,
    borderRadius: 3,
    marginTop: 10,
  },
  buttonContainer: {
    padding: 10,
    width: '80%',
    height: 48,
    flexDirection: 'row',
    borderRadius: 3,
  },
  iconWrapper: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontWeight: 'bold',
  },
  btnTxtWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
