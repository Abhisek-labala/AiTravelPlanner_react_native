import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';

export default function Tablayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarActiveTintColor:Colors.black
    }}>
      <Tabs.Screen name="mytrips"
      options={{
        tabBarLabel:'mytrips',
        tabBarIcon:({color})=>
          <Ionicons name="location" size={24} color={color} />

      }} />
      <Tabs.Screen name="discover" 
      options={{
        tabBarLabel:'discover',
        tabBarIcon:({color})=>
          <Ionicons name="globe-sharp" size={24} color={color} />

      }}/>
      <Tabs.Screen name="profile"
      options={{
        tabBarLabel:'profile',
        tabBarIcon:({color})=>
          <Ionicons name="people-circle" size={24}color={color} />

      }} />
    </Tabs>
  )
}