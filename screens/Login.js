import React, { useState } from 'react'; 
import auth from '@react-native-firebase/auth';
import { 
  View, 
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
  ToastAndroid,
  ScrollView
} from 'react-native'; 
const Login = ({navigation}) => {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const signIn = (email, password) => {
    console.log("Sign In button clicked");
    
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate('AddQuiz');
        console.log("User signed in");
      })
      .catch((error) => {
        console.log(error);
        ToastAndroid.showWithGravityAndOffset(
          `${error}`,
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
          25,
          50
        );
      });
  }
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Login</Text>
      <View style={styles.formContainer}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}
          keyboardShouldPersistTaps='handled'
        >
          <TextInput 
            label={"Email"}
            keyboardType="email-address"
            style={styles.textInputStyle}
            placeholder="Email Address"
            onChangeText={text => {
              setEmail(text); 
            }}
          />
          <TextInput 
            label={"Password"}
            secureTextEntry
            style={styles.textInputStyle}
            placeholder="Password"
            onChangeText={text => {
              setPassword(text); 
            }}
          />
          <View style={styles.loginBtnContainer}>
            <TouchableOpacity 
              style={styles.loginBtn} 
              onPress={() => {signIn(email, password)}}
            >
              <Text style={styles.loginBtnText}>Login</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <View style={styles.signUpBtnContainer}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity 
          style={styles.signUpBtn} 
          onPress={() => navigation.navigate('SignUp')}
        >
          <Text style={styles.signUpBtnText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View> 
  );  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headingText: {
    marginTop: 100,
    textAlign: 'center', 
    fontSize: 30,
  },
  loginBtnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  loginBtn: {
    textAlign: 'center',
    justifyContent: "center",
    alignContent: 'center',
    backgroundColor: '#3b7', 
    padding: 10,
    borderRadius: 10,
  },
  loginBtnText: {
    color: '#fff',
    fontSize: 16,
  },
  
  formContainer: {
    padding: 15,
  },
  textInputStyle: {
    padding: 5,
    borderBottomWidth: 1,
    marginBottom: 10,
    fontSize: 20,
  },
  signUpBtnContainer: {
    marginTop: 10,
    justifyContent: 'center',
    flexDirection: 'row'
  }, 
  signUpBtn: {
    marginLeft: 5,
    borderBottomWidth: 1, 
    borderBottomColor: '#37c'
  },
  signUpBtnText: {
    color: '#37c',
  },
});

export default Login;