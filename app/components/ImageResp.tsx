import React from 'react';
import {Image, View, StyleSheet, useWindowDimensions} from 'react-native';
import {colors} from '../config';

export default function ImageResp(url: string) {
  const {width, scale} = useWindowDimensions();

  return (
    <View style={styles.containerImage}>
      <Image
        resizeMode="contain"
        source={{
          uri: url + `?width=${width * scale}`,
        }}
        // style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerImage: {
    width: '100%',
    height: 210,
    borderTopWidth: 3,
    borderBottomWidth: 3,
    borderTopColor: colors.blue,
    borderBottomColor: colors.yellow,
  },
});
