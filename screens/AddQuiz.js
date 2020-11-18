import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Keyboard, Alert } from 'react-native'; 
import auth from '@react-native-firebase/auth';
import LogoutBtn from '../components/LogoutBtn';

const AddQuiz = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <LogoutBtn onPress={() => showAlert()} />
      ),
    });
  }, [navigation])

  const [initializing, setInitializing] = useState(true); 
  const [user, setUser] = useState();

  const onAuthStateChanged = (user) => {
    setUser(user); 
    if(initializing) 
      setInitializing(false); 
  }
  useEffect(() => {
    Keyboard.dismiss();
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged); 
    return subscriber; 
  }, []);
  
  const signOutUser = () => {
    auth()
      .signOut()
      .then(() => {
        console.log('User Signed Out'); 
        navigation.navigate('Home');
      })
  }
  const showAlert = () => {
    Alert.alert(
      'Do you want to logout?',
      "",
      [
        {
          text: 'No',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        { text: 'Yes', onPress: () => {
            console.log('OK Pressed'); 
            signOutUser(); 
          }
        }
      ],
      { cancelable: false }
    );
  }
  if(initializing) 
    return null;
  
  if(!user ) {
    return (
      <View>
        <Text>Not a user</Text>
      </View>
    ); 
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.btn} 
        onPress={showAlert}
      >
        <Text style={styles.btnText}>Sign Out</Text>
      </TouchableOpacity>
    </View> 
  );  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: '#37c',
    padding: 10,
    borderRadius: 10,
  }, 
  btnText: {
    color: '#fff',
    fontSize: 20,
  }
});

export default AddQuiz;