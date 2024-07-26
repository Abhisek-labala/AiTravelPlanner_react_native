import { View, Text,Image ,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { useRouter } from 'expo-router'

export default function Login() {
    const router=useRouter();
  return (
    <View>
     <Image source={require('./../assets/images/login.jpeg')} 
     style={{
        width:'100%',
        height:520
    }}
     />
     <View style={styles.container}>
        <Text
        style={{
            fontSize:28,
            // fontFamily:'outfit-bold',
            textAlign:'center',
            fontWeight:'bold',
            marginTop:15
        }}>
            AV'S AI TRAVEL PLANNER
        </Text>
        <Text
        style={{
            fontSize:18,
            // fontFamily:'outfit-regular',
            textAlign:'center',
            Colors:Colors.grey,
            marginTop:40,
        }}
        >
        Your Smart Companion for Seamless Journeys
        </Text>
     </View>
     <TouchableOpacity style={styles.button}
     onPress={()=>router.push('auth/sign-in')}>
        <Text style={{color:Colors.white,
            textAlign:'center',
            // fontFamily:'outfit',
            fontSize:18,
        }}>Get Started</Text>
     </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
    backgroundColor:Colors.white,
    marginTop:-20,
    height:'100',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    padding:25,
    },
    button:{
        padding:15,
        backgroundColor:Colors.black,
        borderRadius:99,
        marginTop:'15%'
    }
})