import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Btn = ({onPress=() => {}, text}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btnContainer}>
      <Text style={styles.btnText}>{ text }</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: '#37c',
    padding: 10,
    width: '100%',
    borderWidth: 1,
    borderColor: '#37c',
    borderRadius: 20,
    margin: 10,
  },
  btnText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  }
})

export default Btn;