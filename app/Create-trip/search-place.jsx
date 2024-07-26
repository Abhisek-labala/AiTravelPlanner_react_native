import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import {CreateTripContext} from '../../context/CreateTripContext'
import {Colors} from '../../constants/Colors'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default function SearchPlace() {
    const navigation =useNavigation();
    const router = useRouter();
    const {tripData,setTripData} =useContext(CreateTripContext)
    useEffect(()=>
    {
        navigation.setOptions({
            headerShown:true,
            headerTranparent:true,
            headerTitle: 'Search',
        })
    },[]);
    useEffect(()=>
    {
      console.log(tripData);
      },[tripData]);
    
  return (
    <View 
    style={{
        padding:25,
        paddingTop:15,
        backgroundColor:Colors.white,
        height:'100%'
    }}>
      <GooglePlacesAutocomplete
      placeholder='Search Place'
      fetchDetails={true}
      onPress={(data, details = null) => {
        setTripData({
          locationInfo:{
            name:data.description,
            cordinates:details?.geometry.location,
            photoRef:details?.photos[0]?.photo_reference,
            url:details?.url
          }
        })
        router.push('/Create-trip/select-traveler');
      }}
      query={{
        key: process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
        language: 'en',
      }}
      styles={{
        textInputContainer:{
          borderWidth:1,
          borderRadius:5,
          marginTop:10,

        }
      }}
    />
    </View>
  )
}