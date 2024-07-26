import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { useNavigation, useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { CreateTripContext } from '../../context/CreateTripContext';
import moment from 'moment/moment';

export default function ReviewTrip() {
  const navigation=useNavigation();
  const {tripData,setTripData} =useContext(CreateTripContext);
  const router=useRouter();
  useEffect(()=>
    {
      navigation.setOptions({
        headerShown:true,
        headerTransperent:true,
        headerTitle:''
      })
    },[]);
  return (
    <View style={{
      padding:25,
      paddingTop:20,
      backgroundColor:Colors.white,
      height:'100%',
    }}>
      <Text style={{
        color:Colors.black,
        fontSize:30,
        fontWeight:'bold',
        marginTop:20,
      }}>Review Your Trip</Text>
      <View
      style={{
        marginTop:20,
      }}>
        <Text 
        style={{
          fontWeight:'bold',
          fontSize:20,
        }}>
        Before generating your trip, Please review  your selection.
        </Text>
        {/* destination info */}
        <View style={{
          marginTop:40,
          display:'flex',
          flexDirection:'row',
          gap:20,
        }}>
        {/* <Ionicons name="location" size={34} color="black" /> */}
          <Text style={{
            fontSize:35,
          }}>📍</Text>
        <View> 
          <Text style={{
            fontWeight:'medium',
            fontSize:20,
            color:Colors.grey,
          }}>Destination</Text>
          <Text
          style={{
            fontWeight:'bold',
            fontSize:20,
          }}>{tripData?.locationInfo?.name}</Text>
        </View>
        </View>
        {/* Date info */}
        <View style={{
          marginTop:30,
          display:'flex',
          flexDirection:'row',
          gap:20,
        }}>
          <Text style={{
            fontSize:35,
          }}>🗓️</Text>
        <View> 
          <Text style={{
            fontWeight:'medium',
            fontSize:20,
            color:Colors.grey,
          }}>Travel Date</Text>
          <Text
          style={{
            fontWeight:'bold',
            fontSize:20,
          }}>{moment(tripData?.startDate).format('DD MMM')
             + " To " + 
          moment(tripData?.endDate).format('DD MMM') +"  " }
          ({tripData?.totalNoOfDays}days)</Text>
        </View>
        </View>
        {/* traveler info */}
        <View style={{
          marginTop:30,
          display:'flex',
          flexDirection:'row',
          gap:20,
        }}>
          <Text style={{
            fontSize:35,
          }}>🚌</Text>
        <View> 
          <Text style={{
            fontWeight:'medium',
            fontSize:20,
            color:Colors.grey,
          }}>Who is Travelling</Text>
          <Text
          style={{
            fontWeight:'bold',
            fontSize:20,
          }}>{tripData?.traveler?.title}</Text>
        </View>
        </View>
        {/* Budget info */}
        <View style={{
          marginTop:30,
          display:'flex',
          flexDirection:'row',
          gap:20,
        }}>
          <Text style={{
            fontSize:35,
          }}>💰</Text>
        <View> 
          <Text style={{
            fontWeight:'medium',
            fontSize:20,
            color:Colors.grey,
          }}>Budget</Text>
          <Text
          style={{
            fontWeight:'bold',
            fontSize:20,
          }}>{tripData?.budget}</Text>
        </View>
        </View>
        <TouchableOpacity
        onPress={()=>router.replace('/Create-trip/generate-trip')}
      style={{
        padding:20,
        backgroundColor:Colors.black,
        borderRadius:15,
        marginTop:40,
      }}>
        <Text
        style={{
            color:Colors.white,
            textAlign:'center',
            justifyContent:'center',
            fontWeight:'medium',
            fontSize:20,
        }}>Build My Trip</Text>
      </TouchableOpacity>
        </View>
    </View>
  )
}