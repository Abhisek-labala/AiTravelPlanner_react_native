import { View, Text, FlatList,TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router';
import OptionCard from '../../components/CreateTrip/OptionCard';
import {SelectBudgetList} from '../../constants/Options';
import { Colors } from '../../constants/Colors';
import { CreateTripContext } from '../../context/CreateTripContext';

export default function SelectBudget() {
    const navigation=useNavigation();
    const [selectedOption,setSelectedOption]=useState();
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
        useEffect(()=>
            {
                setTripData({...tripData,budget:selectedOption?.title})
            },[selectedOption]);
        const onClickContinue=()=>{
            if(!selectedOption)
            {
                ToastAndroid.show('pleasen select your budget',ToastAndroid.LONG);
                return;
            }
            router.push('Create-trip/review-trip');
        }
  return (
    <View
    style={{
        padding:25,
        paddingTop:20,
        backgroundColor:Colors.white,
        height:'100%',
    }}>
      <Text style={{
        fontSize:30,
        fontWeight:'bold',
        marginTop:20,
      }}>SelectBudget</Text>
      <View style={{
        marginTop:20,
      }}>
        <Text 
        style={{
            fontSize:20,
            fontWeight:'bold',
        }}>Choose Spending Habits for your trip</Text>
        <FlatList 
        data={SelectBudgetList}
        renderItem={({item,index})=>(
            <TouchableOpacity
             style={{
                marginVertical:10,
            }}
            onPress={()=>
                setSelectedOption(item)
            }
            >
                <OptionCard option={item} selectedOption={selectedOption}/>
            </TouchableOpacity>
  )}/>
      </View>
      <TouchableOpacity
      onPress={()=>onClickContinue()}
      style={{
        padding:20,
        backgroundColor:Colors.black,
        borderRadius:15,
        marginTop:20,
      }}>
        <Text
        style={{
            color:Colors.white,
            textAlign:'center',
            justifyContent:'center',
            fontWeight:'medium',
            fontSize:20,
        }}>Continue</Text>
      </TouchableOpacity>
    </View>
  )
}