/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import HomeScreen from './src/screens/Home';
import SearchResultScreen from './src/screens/SearchResult';
import Post from './src/components/Post';
import feed from './assets/data/feed';
import LocationSearchScreen from './src/screens/LocationSearch';

const post1 = feed[1];

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {/*  <Post post={post1} />*/}
        {/*        <HomeScreen />*/}
        {/*<SearchResultScreen />*/}
        <LocationSearchScreen />
      </SafeAreaView>
    </>
  );
};

export default App;
