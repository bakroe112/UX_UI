import React from "react";
import { Text, View } from "react-native";
import { BatteryFull, Signal, Wifi } from "lucide-react-native";

export default function AppStatusBar({ dark = false }) {
  const bg = dark ? "bg-[#0D5C63]" : "bg-[#F9F5F0]";
  const textColor = dark ? "#FFFFFF" : "#000000";
  const iconColor = dark ? "#FFFFFF" : "#000000";

  return (
    <View className={`h-[45px] w-full flex-row items-center justify-between ${bg} px-[20px]`}>
      <Text
        className="text-[15px] tracking-[-0.3px]"
        style={{ fontFamily: "PlusJakartaSans_700Bold", color: textColor }}
      >
     
      </Text>
      <View className="flex-row items-center gap-x-[8px]">
        <Signal size={16} strokeWidth={2} color={iconColor} />
        <Wifi size={16} strokeWidth={2} color={iconColor} />
        <BatteryFull size={18} strokeWidth={2} color={iconColor} />
      </View>
    </View>
  );
}
