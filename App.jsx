import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import HomeStack from './src/navigators/HomeStack';

const App = () => {
  return (
    <SafeAreaView
      style={{backgroundColor: 'white', width: '100%', height: '100%'}}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <HomeStack />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
