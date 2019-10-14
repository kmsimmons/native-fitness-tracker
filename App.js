import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import logo from './homepage.jpg'
import Timer from './Timer.js'

export default function App() {
  return (
    <ImageBackground source={logo} style={{width:'100%', height:'100%'}}>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
