import { View, Text, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '../../constants/Colors';
import CalendarPicker from "react-native-calendar-picker";
import moment from 'moment';
import { CreateTripContext } from '../../context/CreateTripContext';
export default function SelectDates() {
  const navigation=useNavigation();
  const [startDate,setStartDate]=useState();
  const [endDate,setEndDate]=useState();
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
  const onDateChange=(date,type)=>{
    console.log(date);
    console.log(type);
    if(type=='START_DATE')
    {
      setStartDate(moment(date));
    }
    else{
      setEndDate(moment(date));
    }
  }

  const OnDateSelectionContinue =()=>
  {
    if(!startDate&&!endDate)
    {
      ToastAndroid.show('please select start and end date',ToastAndroid.LONG)
      return;
    }
    const totalNoOfDays=endDate.diff(startDate,'days');
    console.log(totalNoOfDays+1);
    setTripData({
      ...tripData,startDate:startDate,
      endDate:endDate,
      totalNoOfDays:totalNoOfDays+1,
    })

    router.push('Create-trip/select-budget');
  }


  return (
    <View style={{
      padding:25,
      paddingTop:20,
      backgroundColor:Colors.white,
      height:'100%',
    }}>
    <Text style={{
      fontSize:35,
      fontWeight:'bold',
    }}>Travel Dates</Text>
    <View style={{
      marginTop:30,
    }}>
    <CalendarPicker 
    allowRangeSelection={true} 
    minDate={new Date()}
    maxRangeDuration={5}
    selectedRangeStyle={{
      backgroundColor:Colors.black,
    }}
    selectedDayTextStyle={{
      color:Colors.white,
    }}
    onDateChange={onDateChange} />
    </View>
    <TouchableOpacity
    onPress={OnDateSelectionContinue}
    style={{
      backgroundColor:Colors.black,
      padding:15,
      borderRadius:15,
      marginTop:20,
      alignItems:'center',
      paddingTop:10,
    }}>
      <Text style={{color:Colors.white}}>Continue</Text>
    </TouchableOpacity>
    </View>
  )
}