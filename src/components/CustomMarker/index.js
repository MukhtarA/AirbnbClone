import React from 'react';
import {View, ImageBackground, Text, FlatList} from 'react-native';
import feed from '../../../assets/data/feed';
import Post from '../../components/Post';
import {Marker} from 'react-native-maps';

const CustomMarker = (props) => {
  const {coordinate, price, onPress, isSelected} = props;
  return (
    <Marker coordinate={coordinate} onPress={onPress}>
      <View
        style={{
          backgroundColor: isSelected ? 'black' : 'white',
          padding: 5,
          borderRadius: 20,
          borderColor: 'gray',
          borderWidth: 1,
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            color: isSelected ? 'white' : 'black',
          }}>
          {price}
        </Text>
      </View>
    </Marker>
  );
};

export default CustomMarker;
