import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function InterviewHeader({ 
  title, 
  onBackPress, 
  BackIcon, 
  showTimer = false,
  timerValue = "2:00" 
}) {
  return (
    <View className="h-[60px] bg-[#0d5c63] px-[20px] py-[10px] flex-row items-center justify-between">
      <TouchableOpacity
        className="h-[33.4px] w-[33.4px] rounded-[11px] bg-[#ffffff26] items-center justify-center"
        onPress={onBackPress}
      >
        <BackIcon size={17.58} color="#ffffff" />
      </TouchableOpacity>
      
      <View className="flex-1 ml-[14px]">
        <Text
          className="text-[16px] text-[#ffffff]"
          style={{ 
            fontFamily: "PlusJakartaSans_700Bold",
            lineHeight: 22.5
          }}
        >
          {title}
        </Text>
      </View>

      {showTimer && (
        <View className="h-[28px] w-[62px] rounded-[12px] bg-[#f0fdf44a] border border-[#4caf50] items-center justify-center flex-row">
          <View className="h-[6px] w-[6px] rounded-full bg-[#3ae87a] mr-[4px]" />
          <Text
            className="text-[12px] text-[#3ae87a]"
            style={{ 
              fontFamily: "PlusJakartaSans_700Bold",
              lineHeight: 22.5
            }}
          >
            {timerValue}
          </Text>
        </View>
      )}
    </View>
  );
}