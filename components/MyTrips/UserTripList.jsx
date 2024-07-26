import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import moment from 'moment';
import { Colors } from '@/constants/Colors';
import UserTripCard from '../MyTrips/UserTripCard'; // Make sure the import path is correct
import { useRouter } from 'expo-router';

export default function UserTripList({ userTrips }) {
  // Parse the trip data from the userTrips array
  const latestTrip = userTrips.length > 0 ? JSON.parse(userTrips[0].tripData) : null;
  const tripPlan = userTrips.length > 0 ? userTrips[0].tripPlan.trip: null;
  console.log('Trip latest:',latestTrip);
  console.log('Trip latest2:',tripPlan);
  const router = useRouter();
  

  return (
    <View>
      <View style={{ marginTop: 20, marginBottom: 50 }}>
        {latestTrip?.locationInfo?.photoRef ? (
          <Image
            source={{
              uri:
                'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=' +
                latestTrip.locationInfo.photoRef +
                '&key=' +
                process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
            }}
            style={{
              width: '100%',
              height: 200,
              borderRadius: 15,
            }}
          />
        ) : (
          <Image
            source={require('../../assets/images/react-logo.png')}
            style={{
              width: '100%',
              height: 200,
              borderRadius: 15,
            }}
          />
        )}
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
            {latestTrip?.locationInfo?.name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Text
              style={{
                fontSize: 17,
                fontWeight: 'bold',
                color: Colors.grey,
              }}
            >
              🗓️ {moment(latestTrip?.startDate).format('DD MMM YYYY')}
            </Text>
            <Text
              style={{
                fontSize: 17,
                fontWeight: 'bold',
                color: Colors.grey,
              }}
            >
              🚌 {latestTrip?.traveler?.title}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() =>
              router.push({
                pathname: '/trip-details',
                params: {
                  tripData: JSON.stringify({ ...latestTrip, ...tripPlan }),
                },
              })
            }
            style={{
              backgroundColor: Colors.black,
              padding: 15,
              borderRadius: 15,
              marginTop: 10,
            }}
          >
            <Text
              style={{
                color: Colors.white,
                fontSize: 17,
                textAlign: 'center',
                fontWeight: 'bold',
              }}
            >
              See Your Plan
            </Text>
          </TouchableOpacity>
        </View>
        {userTrips.map((trip, index) => (
          <UserTripCard trip={JSON.parse(trip.tripData)} key={index} />
        ))}
      </View>
    </View>
  );
}
