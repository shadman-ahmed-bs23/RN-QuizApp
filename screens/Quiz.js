import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import  Btn  from '../components/Btn';
import Alert from '../components/Alert';

const Quiz = ({route, navigation}) => {
  
  const { title, questions } = route.params;
  const totalCount = questions.length;
  

  //States
  const [correctCount, setCorrectCount] = useState(0); 
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [answerCorrect, setAnswerCorrect] = useState(false); 

  const optionSelected = (text, correct) => {
    console.log(text);
    setAnswered(true);
    if(correct) {
      setCorrectCount(correctCount + 1); 
      setAnswerCorrect(true);
    }
    else {
      setAnswerCorrect(false);
    }
    setTimeout(nextQuestion, 1000);
  }

  const nextQuestion = () => {
    const nextIndex = activeQuestionIndex + 1; 
    if(nextIndex >= totalCount) {
      navigation.popToTop();
    }
    setActiveQuestionIndex(nextIndex);
    setAnswered(false);
    console.log(activeQuestionIndex);
  }

  const question = questions[activeQuestionIndex];
  return (
    <View>
      <Text>Quiz Screen</Text>
      <Text>{title}</Text>
      {activeQuestionIndex < totalCount ? (
        <View>
          <Text style={styles.questionText}>{question.question}</Text>
          <View style={styles.btnContainer}>
            {question.answers.map(answer => (
              <Btn key={answer.id} text={answer.text} onPress={() => optionSelected(answer.text, answer.correct)} />
            ))}
          </View>
          <Alert
            correct={answerCorrect}
            visible={answered}
          />
        </View>
      ) : null}
      
    
    </View>
  ); 
}

const styles = StyleSheet.create({
  questionText: {
    fontSize: 20,
    margin: 40,
  },
  btnContainer: {
    margin: 40,
  }  
})

export default Quiz;