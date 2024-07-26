import { View, Text,TouchableOpacity  } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';
import { useRouter } from 'expo-router';
export default function StratNewTripCard() {
    const router=useRouter();
  return (
    <View
    style={{
        padding:20,
        marginTop:50,
        display:'flex',
        alignItems:'center',
        gap:25
    }}>
        <Ionicons name="location-sharp" size={30} color="black" />
        <Text
        style={{
            fontSize:25,
        fontWeight:'bold'
        }}>No Trips Planned Yet</Text>
        <Text
        style={{
            fontSize:20,
        fontWeight:'regular',
        textAlign:'center',
        color:Colors.grey,
        }}>Looks like its time to plan a new travel experience! Get Started below</Text>
        <TouchableOpacity
        onPress={()=>router.push('/Create-trip/search-place')}
        style={{
            padding:10,
            backgroundColor:Colors.black,
            borderRadius:15,
            paddingHorizontal:30,
            
        }}>
            <Text
            style={{
                color:Colors.white,
                fontSize:20,
                fontWeight:'medium'
            }}>Start a new trip</Text>
        </TouchableOpacity>
    </View>
  )
}