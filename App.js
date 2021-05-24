import React,  { useState } from 'react';
import { Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {

  const [numero, setNumero] = useState(60);

  function numeroAleatorio(){
    const novoNumero = Math.floor(Math.random() * 60);

    setNumero(novoNumero);
  };

  return (
    <SafeAreaView style= {{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
      <Text style = {styles.randomStyle}>{numero}</Text>
      <TouchableOpacity style = {styles.buttonStyle} onPress = {numeroAleatorio}>
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