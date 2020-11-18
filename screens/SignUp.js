import React, { useState } from 'react'; 
import auth from '@react-native-firebase/auth';
import { 
  View, 
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
  ToastAndroid
} from 'react-native'; 
const SignUp = ({navigation}) => {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const signUpUser = (email, password) => {
    console.log("Sign In button clicked");
    
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate('Login');
        console.log("User Signed Up");
        ToastAndroid.showWithGravityAndOffset(
          "Sign Up Successful. Now login to your account",
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
          25,
          50
        );
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
      <Text style={styles.headingText}>Sign Up</Text>
      <View style={styles.formContainer}>
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
        <View style={styles.signUpBtnContainer}>
          <TouchableOpacity 
            style={styles.signUpBtn} 
            onPress={() => {signUpUser(email, password)}}
          >
            <Text style={styles.signUpBtnText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.loginBtnContainer}>
        <Text>Already have an account?</Text>
        <TouchableOpacity 
          style={styles.loginBtn} 
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.loginBtnText}>Login</Text>
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
  signUpBtnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  signUpBtn: {
    textAlign: 'center',
    justifyContent: "center",
    alignContent: 'center',
    backgroundColor: '#3b7', 
    padding: 10,
    borderRadius: 10,
  },
  signUpBtnText: {
    color: '#fff',
    fontSize: 16,
  },
  loginBtnContainer: {
    marginTop: 10,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  loginBtn: {
    marginLeft: 5,
    borderBottomWidth: 1, 
    borderBottomColor: '#37c'
  },
  loginBtnText: {
    color: '#37c',
  },
  formContainer: {
    padding: 15,
  },
  textInputStyle: {
    padding: 5,
    borderBottomWidth: 1,
    marginBottom: 10,
  } 
});

export default SignUp;