import React from 'react';
import { View, Text, StyleSheet } from 'react-native'; 
import Btn from '../components/Btn';

const ResultScreen = ({route, navigation}) => {
  const { correctCount } = route.params;
  return (
    <View>
      <Text style={styles.resultText}>
        ResultScreen {correctCount}
      </Text>
      <View style={styles.btnContainer}>
        <Btn onPress={() => navigation.navigate("Home")} text="Go to Home" />
      </View>
    </View>
  ); 
}

const styles = StyleSheet.create({
  resultText: {
    margin: 20,
    fontSize: 20,
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