import React from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  useWindowDimensions,
  View,
  Image,
} from 'react-native';
import RenderHtml from 'react-native-render-html';
import LinearGradient from 'react-native-linear-gradient';

import {colors} from '../config';
import {getGMTDate} from '../helpers';

const PostScreen = ({route}: any) => {
  const {data} = route.params;
  const source = {html: data.content.rendered};
  const {width, scale} = useWindowDimensions();
  const GMTDate = getGMTDate(data.date_gmt);

  if (!data) {
    return null;
  }

  return (
    <>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        locations={[0.45, 0.55]}
        colors={[colors.blue, colors.yellow]}
        style={styles.gradient}
      />

      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.date}>
            Автор: {data.yoast_head_json.author} | Дата публикації: {GMTDate}
          </Text>

          <Text style={styles.title}>{data.yoast_head_json.og_title}</Text>

          <Text style={styles.description}>
            {data.yoast_head_json.og_description}
          </Text>

          <View style={styles.containerImage}>
            <Image
              resizeMode="contain"
              source={{
                uri:
                  data.yoast_head_json?.og_image[0].url +
                  `?width=${width * scale}`,
              }}
              style={styles.image}
            />
          </View>
        </View>

        <RenderHtml
          contentWidth={width}
          source={source}
          baseStyle={styles.text}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  gradient: {
    height: 3,
  },
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  text: {
    color: colors.white,
    margin: 14,
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
  header: {
    margin: 14,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  containerImage: {
    width: '100%',
    height: 210,
    borderTopWidth: 3,
    borderBottomWidth: 3,
    borderTopColor: colors.blue,
    borderBottomColor: colors.yellow,
  },
  date: {
    color: colors.white,
    fontSize: 12,
  },
});

export default PostScreen;
