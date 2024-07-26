import { View, Text, Image } from 'react-native';
import React from 'react';
import moment from 'moment';
import { Colors } from '@/constants/Colors';
export default function UserTripCard({ trip }) {
  return (
    <View  style={{
        marginTop:20,
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
      }}>
     <Image
            source={{
              uri:
                'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=' +
                trip.locationInfo.photoRef +
                '&key=' +
                process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
            }}
            style={{
                width: 100, 
                height: 100,
                borderRadius:15,
                marginRight:10
            }}
          />
      <View>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{trip?.locationInfo?.name}</Text>
        <Text style={{ fontSize: 16, color:Colors.grey }}>🗓️ {moment(trip?.startDate).format('DD MMM YYYY')}</Text>
        <Text style={{ fontSize: 14, color:Colors.grey  }}>Traveling: {trip?.traveler?.title}</Text>
      </View>
    </View>
  );
}
