/* import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 */

import React from 'react';
import { Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style= {{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
      <Text style = {styles.randomStyle}>0</Text>
      <TouchableOpacity style = {styles.buttonStyle}>
        <Text style = {styles.textButtonStyle}>Gerar random</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  randomStyle: {
    fontSize: 36,
    paddingBottom: 15
  },
  buttonStyle: {

    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginRight: 5,
    marginLeft: 5
  },
  textButtonStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
});

export default App;