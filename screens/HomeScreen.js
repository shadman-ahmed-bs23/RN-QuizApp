import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native'; 
import Btn from '../components/Btn';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      
      <Btn text="Go to Quiz Index" onPress={() => navigation.navigate('Quiz Index')} />
      
      <Btn text="About the App" onPress={() => navigation.navigate('About')} />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    margin: 20,
  }
})

export default HomeScreen;