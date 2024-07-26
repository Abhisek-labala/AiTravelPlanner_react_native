import { View, Text, FlatList,TouchableOpacity } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigation } from 'expo-router';
import { Colors } from '../../constants/Colors';
import { SelectTravellerList } from '../../constants/Options';
import OptionCard from '../../components/CreateTrip/OptionCard';
import { CreateTripContext } from '../../context/CreateTripContext';

export default function SelectTraveler() {
  const navigation = useNavigation();
  const [selectedTraveler,setSelecteTraveler]=useState();
  const {tripData,setTripData} =useContext(CreateTripContext);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: '',
    });
  }, []);

  useEffect(()=>
{
    setTripData({...tripData,traveler:selectedTraveler})
},[selectedTraveler]);

useEffect(()=>{
    console.log(tripData)
},[tripData])
  return (
    <View
      style={{
        padding: 15,
        paddingTop: 40,
        backgroundColor: Colors.white,
        height: '100%',
      }}
    >
      <Text
        style={{
          fontSize: 40,
          fontWeight: 'bold',
          paddingTop:50,

        }}
      >
        Who's travelling
      </Text>
      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
          }}
        >
          Choose Your Travellers
        </Text>
        <FlatList
          data={SelectTravellerList}
          renderItem={({ item, index }) => (
            <TouchableOpacity 
            onPress={()=>
                setSelecteTraveler(item)
            }
            style={{
                marginVertical:10,
            }}>
            <OptionCard option={item} key={index}  selectedOption={selectedTraveler}/>
            </TouchableOpacity> 
          )}
        />
      </View>
      <TouchableOpacity style={{
        padding:20,
        backgroundColor:Colors.black,
        borderRadius:15,
        marginTop:20,
      }}>
        <Link href={'/Create-trip/select-dates'}
      style={{width:'100%',
        textAlign:'center',
      }}>
        <Text
        style={{
            color:Colors.white,
            textAlign:'center',
            justifyContent:'center',
            fontWeight:'medium',
            fontSize:20,
        }}>Continue</Text>
        </Link>
      </TouchableOpacity>
    </View>
  );
}