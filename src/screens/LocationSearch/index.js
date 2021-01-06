import React from 'react';
import {View, ImageBackground, Text, FlatList} from 'react-native';
import feed from '../../../assets/data/feed';
import Post from '../../components/Post';
import styles from './styles';

const LocationSearchScreen = (props) => {
  return (
    <View>
      <FlatList data={feed} renderItem={({item}) => <Post post={item} />} />
    </View>
  );
};

export default LocationSearchScreen;
