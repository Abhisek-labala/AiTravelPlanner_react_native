import { View, Text } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

interface Option {
  title: string;
  desc: string;
  icon:string;
}

export default function OptionCard({ option ,selectedOption}: { option: Option }) {

  return (
    <View style={[{
      padding: 25,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor:Colors.lightGrey,
      borderRadius:15,
      },selectedOption?.id==option?.id&&{borderWidth:3}]}>
      <View>
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
          }}
        >
          {option.title}
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "regular",
            color: Colors.grey,
          }}
        >
          {option.desc}
        </Text>
      </View>
      <Text
        style={{
          fontSize: 35,
        }}
      >
        {option.icon}
      </Text>
    </View>
  );
}
