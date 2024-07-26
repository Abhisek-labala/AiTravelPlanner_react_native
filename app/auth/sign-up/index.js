import { View, Text ,StyleSheet,TextInput,TouchableOpacity, ToastAndroid} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '../../../constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth } from '../../../configs/FirebaseConfig'

export default function SignUp() {
  const navigation =useNavigation();
  const router=useRouter();

  const [email,setEmail]=useState();
  const [password,setPassword] =useState();
  const [fullname,setFullname] =useState();

  useEffect(()=>
  {
    navigation.setOptions({
      headerShown: false,
    })
  })
  const OnCreateAccount=()=>{
    if(!email&& !password&& !fullname)
    {
      ToastAndroid.show('plaese enter all details',ToastAndroid.BOTTOM);
      return ;
    }
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    router.replace('/mytrips');
    console.log(user);
    ToastAndroid.show('Account created successfully',ToastAndroid.BOTTOM);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage,errorCode);
    
    // ..
  });
  }
  return (
    <View style={{
      padding:25,
      paddingTop:50,
       backgroundColor: Colors.white,
      height: '100%'
    }}>
      <TouchableOpacity onPress={router.back}>

<Ionicons name="arrow-back" size={24} color="black" />
</TouchableOpacity>
      <Text style={{
        fontSize:30,
        marginTop:30,
      }}>Create new account</Text>
      <View style={{
        marginTop:50,
      }}>
        <Text >Full Name</Text>
        <TextInput
        style={styles.input}
         placeholder='Enter Fullname' 
         onChangeText={(value)=>setFullname(value)}/>
      </View>
      <View style={{
        marginTop:25,
      }}>
        <Text >Email</Text>
        <TextInput
        style={styles.input}
         placeholder='Enter Email' 
         onChangeText={(value)=>setEmail(value)}/>
      </View>
      {/* password field */}
      <View style={{
        marginTop:25,
      }}>
        <Text >Password</Text>
        <TextInput
        secureTextEntry={true}
        style={styles.input}
         placeholder='Enter password' 
         onChangeText={(value)=>setPassword(value)}/>
      </View>
      {/* signup button */}
      <TouchableOpacity onPress={OnCreateAccount} style={{
        padding:15,
        backgroundColor:Colors.black,
        borderRadius:15,
        marginTop:50
      }}>
        <Text style={{
          color:Colors.white,
          textAlign:'center'
        }}>Create Account</Text>
      </TouchableOpacity>
      {/* create account button */}
      <TouchableOpacity onPress={()=>{
        router.replace('auth/sign-in')
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
        }}>Sign In</Text>
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
