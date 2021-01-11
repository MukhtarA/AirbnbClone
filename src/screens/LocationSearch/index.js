import React, {useState} from 'react';
import {View, TextInput, FlatList, Text, Pressable} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import SuggestionRow from './SuggestionRow';
const LocationSearchScreen = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Input component */}
      <GooglePlacesAutocomplete
        placeholder="Where are you going?"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          navigation.navigate('Guests');
        }}
        fetchDetails
        query={{
          key: 'AIzaSyATEu3fPvgqTOjXP2m_4xWh5WSKTYi2aMg',
          language: 'en',
          types: '(cities)',
        }}
        styles={{
          textInput: styles.textInput,
        }}
        renderRow={(item) => <SuggestionRow item={item} />}
        suppressDefaultStyles
      />
    </View>
  );
};

export default LocationSearchScreen;
