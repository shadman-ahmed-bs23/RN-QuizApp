import React from 'react';
import { View, Text } from 'react-native';
import QuizTopic from '../components/QuizTopic';
import sportsQuestions from '../questions/sportsQuestions';
import footballQuestions from '../questions/footballQuestions';

const QuizIndex = ({ navigation }) => {
  const topicSelected = (title, questions) => {
    navigation.navigate('Quiz', {
      title: title,
      questions: questions,
    });
  }
  return (
    <View>
      
      <QuizTopic onPress={() => topicSelected("Sports", sportsQuestions)} name="Sports"  />
      <QuizTopic onPress={() => topicSelected("Football", footballQuestions)} name="Football" />
    
    </View>
  );
}

export default QuizIndex;