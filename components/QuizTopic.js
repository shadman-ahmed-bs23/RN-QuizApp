import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native'; 


const QuizTopic = ({ onPress=() => {}, name}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View style={styles.topicContainer}>
        <Text style={styles.topicText}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  topicContainer: {
    marginHorizontal: 20,
    marginVertical: 10, 
    padding: 15,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    elevation: 3,
  }, 
  topicText: {
    fontSize: 20,
  }
})

export default QuizTopic; 