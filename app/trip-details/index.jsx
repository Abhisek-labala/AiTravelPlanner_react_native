import { View, Text, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { Colors } from '../../constants/Colors';
import moment from 'moment';
import Flightinfo from '../../components/TripDetails/FlightInfo';

export default function TripDetails() {
  const navigation = useNavigation();
  const { tripData } = useLocalSearchParams();
  console.log('Trip object:', tripData);
  const [tripDetails, setTripDetails] = useState(null);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: '',
    });
    if (tripData) {
      setTripDetails(JSON.parse(tripData));
      console.log(JSON.parse(tripData));
    }
  }, [tripData]);

  if (!tripDetails) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      {tripDetails.locationInfo?.photoRef ? (
        <Image
          source={{
            uri:
              'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=' +
              tripDetails?.locationInfo.photoRef +
              '&key=' +
              process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
          }}
          style={{
            width: '100%',
            height: 300,
            marginRight: 10,
          }}
        />
      ) : (
        <Text>No Photo Available</Text>
      )}
      <View
        style={{
          padding: 15,
          height: '100%',
          backgroundColor: Colors.white,
          marginTop: -30,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginTop: 5,
          }}
        >
          {tripDetails.locationInfo?.name}
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              color: Colors.grey,
            }}
          >
            {moment(tripDetails?.startDate).format('DD MMM YYYY')}
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              color: Colors.grey,
            }}
          >
            {' '}
            - {moment(tripDetails?.endDate).format('DD MMM YYYY')}
          </Text>
        </View>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            color: Colors.grey,
          }}
        >
          🚌 {tripDetails?.traveler?.title}
          
        </Text>

        {/* Flight Info */}
        <Flightinfo flightData={tripDetails?.trip?.flights} />
        {/* Hotel info */}

        {/* Trips day plans */}
      </View>
    </View>
  );
}
