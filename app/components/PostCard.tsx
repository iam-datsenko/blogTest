import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';

import {colors} from '../config';
import {Post, RootStackParamList} from '../types';

type Props = {
  data: Post;
};

const PostCard = ({data}: Props) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  if (!data) {
    return null;
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate('Post', {data});
      }}>
      <View style={styles.container}>
        <View style={styles.containerImage}>
          <Image
            resizeMode="contain"
            source={{
              uri: data.yoast_head_json?.og_image[0].url,
            }}
            style={styles.image}
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>{data.yoast_head_json?.og_title}</Text>

          <Text style={styles.description}>
            {data.yoast_head_json?.og_description}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
  textContainer: {
    padding: 10,
    borderWidth: 1,
    borderColor: colors.secondary,
  },
  title: {
    paddingTop: 14,
    fontWeight: 'bold',
    fontSize: 20,
    color: colors.white,
  },
  description: {
    paddingVertical: 14,
    fontSize: 18,
    color: colors.white,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  containerImage: {
    width: '100%',
    height: 210,
    borderWidth: 1,
    borderColor: colors.secondary,
  },
});

export default PostCard;
