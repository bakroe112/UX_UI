import React from "react";
import { View, Text } from "react-native";
import { Wifi, Signal, Battery } from "lucide-react-native";

export default function StatusBar() {
  return (
    <View className="h-[45px] bg-[#ffffff] flex-row items-center justify-between px-[20px]">
      <Text
        className="text-[15px] text-[#000000]"
        style={{ 
          fontFamily: "PlusJakartaSans_700Bold",
          letterSpacing: -0.3,
          lineHeight: 22.5
        }}
      >
      
      </Text>
      
      <View className="flex-row items-center gap-x-[5px]">
        <Wifi size={20} color="#000000" />
        <Signal size={20} color="#000000" />
        <Battery size={24} color="#000000" />
      </View>
    </View>
  );
}