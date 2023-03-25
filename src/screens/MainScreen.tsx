import React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const MainScreen = () => (
  <WebView
    style={styles.container}
    source={{ uri: 'https://google.com' }}
  />
);

export default MainScreen;
