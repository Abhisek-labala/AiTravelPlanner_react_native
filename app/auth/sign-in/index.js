import { View, Text, TextInput, StyleSheet ,TouchableOpacity, ToastAndroid} from 'react-native'
import React, { useEffect,useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '../../../constants/Colors'
import { Ionicons } from '@expo/vector-icons';
import {signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from './../../../configs/FirebaseConfig'

export default function SignIn() {
  const router=useRouter();
  const navigation = useNavigation();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])
  const OnSignIn =()=>
  {
    if(!email && !password)
    {
      ToastAndroid.show('please enter email and password',ToastAndroid.BOTTOM);
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    router.replace('/mytrips');
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage,errorCode);
    if(errorCode=='auth/invalid-credential')
    {
      ToastAndroid.show('invalid credential',ToastAndroid.BOTTOM);
    }
  });
  }
  return (
    <View style={{
      padding: 25,
      // marginTop:60,
      paddingTop: 50,
      backgroundColor: Colors.white,
      height: '100%'
    }}>
      <TouchableOpacity onPress={router.back}>

      <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={{
        // fontFamily:'outfit-bold',
        fontSize: 30,
        marginTop:30,
      }} >Let's Sign You In</Text>
      <Text style={{
        // fontFamily:'outfit-bold',
        color: Colors.grey,
        marginTop: 30,
        fontSize: 30,
      }} >Welcome Back</Text>
      <Text style={{
        // fontFamily:'outfit-bold',
        color: Colors.grey,
        marginTop: 10,
        fontSize: 30,
      }} >You've been Missed</Text>
      {/* email input */}
      <View style={{
        marginTop:50,
      }}>
        <Text >Email</Text>
        <TextInput
        style={styles.input}
         placeholder='Enter Email'
         onChangeText={(value)=>setEmail(value)} />
      </View>
      {/* password field */}
      <View style={{
        marginTop:25,
      }}>
        <Text >Password</Text>
        <TextInput
        secureTextEntry={true}
        style={styles.input}
         placeholder='Enter password' onChangeText={(value)=>setPassword(value)}/>
      </View>
      {/* signin button */}
      <TouchableOpacity 
      onPress={OnSignIn}
      style={{
        padding:15,
        backgroundColor:Colors.black,
        borderRadius:15,
        marginTop:50
      }}>
        <Text style={{
          color:Colors.white,
          textAlign:'center'
        }}>Sign in</Text>
      </TouchableOpacity>
      {/* create account button */}
      <TouchableOpacity onPress={()=>{
        router.replace('auth/sign-up')
      }} style={{
        padding:15,
        backgroundColor:Colors.white,
        borderWidth:1,
        borderRadius:15,
        marginTop:20
      }}>
        <Text style={{
          color:Colors.black,
          textAlign:'center'
        }}>Create Account</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  input:{
    padding:15,
    borderWidth:1,
    borderRadius:15,
    borderColor:Colors.grey,
  }
})
