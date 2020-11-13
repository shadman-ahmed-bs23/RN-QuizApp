import React from 'react';
import { View, Text, Button } from 'react-native'; 

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>
        Home Screen
      </Text>
      <Button title="About the App" onPress={() => navigation.navigate('About')} />
      <Button title="Go to Quiz Index" onPress={() => navigation.navigate('Quiz Index')} />
    </View>
  );
}

export default HomeScreen;