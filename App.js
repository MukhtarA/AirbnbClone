/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import HomeScreen from './src/screens/Home';
import SearchResultScreen from './src/screens/SearchResult';
import Post from './src/components/Post';
import LocationSearchScreen from './src/screens/LocationSearch';
import GuestsScreen from './src/screens/Guests';
import feed from './assets/data/feed';
import Router from './src/navigation/Router';

const post1 = feed[1];

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Router />
    </>
  );
};

export default App;
