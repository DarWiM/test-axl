import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import React from 'react';
import { AuthContextProvider } from './src/context/AuthContext';
import NavigationRoot from './src/components/NavigationRoot';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const App = () => (
  <AuthContextProvider>
    <View style={styles.container}>

      {/* eslint-disable-next-line react/style-prop-object */}
      <StatusBar style="auto" />

      <NavigationRoot />

    </View>
  </AuthContextProvider>
);

// noinspection JSUnusedGlobalSymbols
export default App;
