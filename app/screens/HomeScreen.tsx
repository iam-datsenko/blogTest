import React from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {colors} from '../config';
import PostCard from '../components/PostCard';
import {usePosts} from '../hooks/usePosts';

const HomeScreen = () => {
  const {blogData, isLoading, isRefreshing, loadMoreData, refreshData} =
    usePosts();

  const renderLoader = () => {
    return (
      <View style={styles.container}>
        <ActivityIndicator
          size="large"
          color={colors.white}
          style={styles.loader}
        />
      </View>
    );
  };

  if (isLoading) {
    return renderLoader();
  }

  if (!isLoading && blogData) {
    return (
      <View style={styles.container}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          locations={[0.45, 0.55]}
          colors={[colors.blue, colors.yellow]}
          style={styles.gradient}
        />

        <View style={styles.cardContainer}>
          <FlatList
            data={blogData}
            keyExtractor={item => item.slug}
            ListHeaderComponent={
              <Text style={styles.header}>ВИБІР РЕДАКЦІЇ</Text>
            }
            ListFooterComponent={renderLoader}
            renderItem={({item}) => <PostCard data={item} />}
            showsVerticalScrollIndicator={false}
            onEndReached={loadMoreData}
            onEndReachedThreshold={0.5}
            refreshControl={
              <RefreshControl
                refreshing={isRefreshing}
                onRefresh={refreshData}
                tintColor={colors.white}
              />
            }
          />
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  gradient: {
    height: 3,
  },
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  cardContainer: {
    margin: 14,
  },
  listContainer: {
    zIndex: 0,
  },
  header: {
    paddingTop: 40,
    paddingBottom: 20,
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
  },
  loader: {
    marginVertical: 24,
    alignItems: 'center',
  },
});

export default HomeScreen;
