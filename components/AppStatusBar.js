import React from "react";
import { View } from "react-native";

export default function AppStatusBar({ dark = false }) {
  const bg = dark ? "bg-[#0D5C63]" : "bg-[#ffffff]";

  return (
    <View className={`h-[45px] w-full ${bg}`} />
  );
}
