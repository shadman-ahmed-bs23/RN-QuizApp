import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import QuizIndex from './screens/QuizIndex';
import Quiz from './screens/Quiz';
import ResultScreen from './screens/ResultScreen';

const Stack = createStackNavigator(); 

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#37c',
            height: 60,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
      
        <Stack.Screen 
          name='Home' 
          component={HomeScreen} 
          options={{ 
            title: 'Quiz App', 
            headerTitleStyle: {
              width: '100%',
              textAlign: 'center',
            } 
          }} 
        />
        <Stack.Screen 
          name='About' 
          component={AboutScreen}
          options={{
            title: 'About Quiz App'
          }}
        />
        <Stack.Screen 
          name='Quiz Index' 
          component={QuizIndex}
          options={{
            title: 'Choose Quiz Topic'
          }}
        />
        <Stack.Screen 
          name='Quiz' 
          component={Quiz}
          options={{
            title: 'Quiz',
            headerLeft: null,
          }}
        />
        <Stack.Screen 
          name='ResultScreen' 
          component={ResultScreen}
          options={{
            title: 'Result Screen',
            headerLeft: null,
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;