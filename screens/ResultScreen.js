import React from 'react';
import { View, Text, StyleSheet } from 'react-native'; 
import Btn from '../components/Btn';

const ResultScreen = ({route, navigation}) => {
  const { correctCount } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>
        Your Score: {correctCount}
      </Text>
      <View style={styles.btnContainer}>
        <Btn onPress={() => navigation.navigate("Home")} text="Go back to Home" />
      </View>
    </View>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
  },
  resultText: {
    margin: 20,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  btnContainer: {
    marginHorizontal: 40,
    textAlign: 'center',
    justifyContent: 'center',
    
    alignItems: 'center',
  }
});

export default ResultScreen;