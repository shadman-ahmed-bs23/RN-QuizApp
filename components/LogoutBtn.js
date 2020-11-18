import React from 'react';
import {View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const LogoutBtn = ({onPress=() => {}}) => {
  return (
    <View>
      <Ionicons name="log-out-outline" size={30} color="white" onPress={onPress} />
    </View>
  );
}

export default LogoutBtn;