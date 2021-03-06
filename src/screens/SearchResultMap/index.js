import React, {useEffect, useRef, useState} from 'react';
import {View, ImageBackground, Text, FlatList} from 'react-native';
import styles from './styles';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import CustomMarker from '../../components/CustomMarker';
import places from '../../../assets/data/feed';
import PostCarouselItem from '../../components/PostCarouselItem';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';

const SearchResultMap = (props) => {
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);
  const width = useWindowDimensions().width;
  const flatlist = useRef();
  const map = useRef();
  const viewConfig = useRef({itemVisiblePercentThreshold: 70});
  const onViewChanged = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      const selectedPlace = viewableItems[0].item;
      setSelectedPlaceId(selectedPlace.id);
    }
  });
  useEffect(() => {
    if (!selectedPlaceId || !flatlist) {
      return;
    }
    const index = places.findIndex((place) => place.id === selectedPlaceId);
    flatlist.current.scrollToIndex({index});

    const selectedPlace = places[index];
    const region = {
      latitude: selectedPlace.coordinate.latitude,
      longitude: selectedPlace.coordinate.longitude,
      latitudeDelta: 0.8,
      longitudeDelta: 0.8,
    };
    map.current.animateToRegion(region);
  }, [selectedPlaceId]);

  return (
    <View style={styles.container}>
      <MapView
        ref={map}
        provider={PROVIDER_GOOGLE}
        style={styles.container}
        initialRegion={{
          latitude: 28.3279822,
          longitude: -16.5124847,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}>
        {places.map((place) => (
          <CustomMarker
            coordinate={place.coordinate}
            price={place.newPrice}
            isSelected={place.id === selectedPlaceId}
            onPress={() => setSelectedPlaceId(place.id)}
          />
        ))}
      </MapView>

      <View
        style={{
          position: 'absolute',
          bottom: 10,
        }}>
        <FlatList
          ref={flatlist}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={places}
          renderItem={({item}) => <PostCarouselItem post={item} />}
          snapToInterval={width - 60}
          snapToAlignment={'center'}
          decelerationRate={'fast'}
          viewabilityConfig={viewConfig.current}
          onViewableItemsChanged={onViewChanged.current}
        />
      </View>
    </View>
  );
};

export default SearchResultMap;
