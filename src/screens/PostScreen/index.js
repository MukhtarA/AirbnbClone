import React from 'react';
import {View, ImageBackground, Text, FlatList} from 'react-native';
import places from '../../../assets/data/feed';
import styles from './styles';
import DetailedPost from '../../components/DetailedPost';
import {useRoute} from '@react-navigation/native';

const PostScreen = (props) => {
  const route = useRoute();
  const post = places.find((place) => place.id === route.params.postId);
  return (
    <View style={styles.container}>
      <DetailedPost post={post} />
    </View>
  );
};

export default PostScreen;
