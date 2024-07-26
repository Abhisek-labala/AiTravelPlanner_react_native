import { View, Text, Image } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Colors } from '../../constants/Colors'
import { CreateTripContext } from '../../context/CreateTripContext';
import { AI_PROMPT } from '../../constants/Options';
import { chatSession } from '../../configs/AiModal';
import { useRouter } from 'expo-router';
import {auth,db} from '../../configs/FirebaseConfig';
import { doc, setDoc } from 'firebase/firestore';
export default function GenerateTrip() {
    const {tripData,setTripData} =useContext(CreateTripContext);
    const [loading,setLoading]=useState(false);
    const router =useRouter();
    const user=auth.currentUser;
    useEffect(()=>{
        GenerateAiTrip()
    },[]);
    const GenerateAiTrip=async()=>{
        setLoading(true);
        const FINAL_PROMPT=AI_PROMPT
        .replace('{location}',tripData?.locationInfo?.name)
        .replace('{totalDays}',tripData?.totalNoOfDays)
        .replace('{totalNights}',tripData?.totalNoOfDays-1)
        .replace('{traveller}',tripData?.traveler?.title)
        .replace('{budget}',tripData?.budget)
        .replace('{totalDays}',tripData?.totalNoOfDays)
        .replace('{totalNights}',tripData?.totalNoOfDays-1)
        console.log(FINAL_PROMPT);
        
    const result = await chatSession.sendMessage(FINAL_PROMPT);
    console.log(result.response.text());
    const responseText = await result.response.text();
    const tripResp =JSON.parse(responseText);
    setLoading(false);
    const docId=(Date.now()).toString();
     const result_ = await setDoc(doc(db,"userTrips",docId),{
        userEmail:user.email,
        tripPlan:tripResp,//ai result
        tripData:JSON.stringify(tripData), //user selection
        docId:docId,

     })
        router.push('(tabs)/mytrips');
    }
  return (
    <View style={{
        padding:25,
        paddingTop:40,
        backgroundColor:Colors.white,
        height:'100%'
    }}>
      <Text style={{
        fontWeight:'bold',
        fontSize:35,
        marginTop:30,
        textAlign:'center',
      }}>Please Wait...</Text>
      <Text style={{
        fontWeight:'medium',
        fontSize:20,
        marginTop:40,
        textAlign:'center',
      }}>We Are Working to generate your dream trip</Text>
      <Image source={require('./../../assets/images/Flying airplane.gif')}
      style={{
        alignItems:'center',
        height:30,
        width:'100%',
        marginTop:100,
        objectFit:'contain',
      }}/>
      <Text style={{
        fontWeight:'bold',
        color:Colors.grey,
        fontSize:20,
        textAlign:'center',
      }}>Do not go Back</Text>
    </View>
  )
}