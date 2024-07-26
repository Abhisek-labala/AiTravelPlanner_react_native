import { View, Text, ActivityIndicator,ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import {Colors} from '../../constants/Colors'
import { Ionicons } from '@expo/vector-icons';
import StratNewTripCard from '../../components/MyTrips/StratNewTripCard';
import {auth, db} from './../../configs/FirebaseConfig';
import { query,collection, getDocs, where } from 'firebase/firestore';
import UserTripList from '../../components/MyTrips/UserTripList';
import { useRouter } from 'expo-router';

export default function MyTrips() {
  const[userTrips,serUserTrips] =useState([]);
  const user=auth.currentUser;
  const router=useRouter();
  const [loading,setLoading]=useState(false);
  useEffect(()=>{
    user&&GetMyTrips();
  },[user])
  const GetMyTrips=async()=>{
    setLoading(true);
    serUserTrips([]);
    const q = query(collection(db,'userTrips'),where('userEmail','==' ,user?.email));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      serUserTrips(prev=>[...prev,doc.data()]);
    });
    setLoading(false);
}
  return (
    <ScrollView style={{
      padding:25,
      paddingTop:55,
      backgroundColor:Colors.white,
      height:'100%',
    }}>
      <View 
      style={{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
      }}>

      <Text style={{
        fontSize:35,
        fontWeight:'bold'
      }}>MyTrips</Text>
      <TouchableOpacity
       onPress={()=>router.push('/Create-trip/search-place')}>

      <Ionicons name="add-circle-sharp" size={50} color="black" />
      </TouchableOpacity>
      </View>

      {loading&&< ActivityIndicator size={'large'} color={Colors.white} />}

      {userTrips?.length==0 ?
      <StratNewTripCard/>:<UserTripList userTrips={userTrips}/>
      }
    </ScrollView>
  )
}