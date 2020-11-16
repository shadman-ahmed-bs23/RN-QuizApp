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
    //console.log(text);
    setAnswered(true);
    if(correct) {
      setAnswerCorrect(true);
      setCorrectCount(correctCount + 1); 
    } else {
      setAnswerCorrect(false);
    }
    
    setTimeout(nextQuestion, 1000);
  }

  const nextQuestion = () => {
    setActiveQuestionIndex(activeQuestionIndex + 1);
    setAnswered(false);
  }

  const question = questions[activeQuestionIndex];
  return (
    <View>
      <Text style={styles.titleText}>{title}</Text>
       
      {activeQuestionIndex < totalCount ? 
        (
          <View>
            <Text style={styles.countText}>Current question: {`${activeQuestionIndex + 1}/${totalCount}`}</Text>
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
            <Text style={styles.countText}>No. of correct answers: {`${correctCount}/${totalCount}`}</Text>

          </View>
        ) : 
        (
          <View style={styles.btnContainer}>
            <Btn onPress={() => navigation.navigate("ResultScreen", {correctCount: correctCount})} 
              text="See your result" />
          </View>
        )
      }
      
    </View>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  questionText: {
    fontSize: 20,
    marginHorizontal: 40,
    marginTop: 20,
    marginBottom: -10,
  },
  btnContainer: {
    margin: 40,
  },
  countText: {
    fontSize: 16,
    textAlign: 'center'
  }
})

export default Quiz;